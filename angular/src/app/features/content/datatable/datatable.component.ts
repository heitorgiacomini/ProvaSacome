import { Component, EventEmitter, OnInit, Output, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { ContentDto } from '@proxy/contracts';
import { ContentService } from '@proxy/controllers';
import { FilterMetadata, LazyLoadEvent } from 'primeng/api';
import { Rest } from '@abp/ng.core';
import { IEnumerable, IQueryable } from 'linq-collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss',
})
export class DatatableComponent implements OnInit {
  cols: any[];
  content: ContentDto[];
  customers!: ContentDto[];
  totalRecords!: number;
  loading: boolean = false;
  selectAll: boolean = false;
  selectedContent!: ContentDto[];
  config?: Partial<Rest.Config>;

  constructor(private _contentService: ContentService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
  }

  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();

  deletar(id: string){
    this.delete.emit(id);
  }

  editarContent(id: string){
    this.edit.emit(id);
  }

  openInNewTab(params: any[], route?: string) {
    try {
      let mopa = this.router.createUrlTree(params);
      let url = this.router.serializeUrl(mopa);
      window.open(url, '_blank');
    } catch (error) {
      console.log(error);
    }
  }

  query: string = '';
  loadContent(event: LazyLoadEvent) {
    this.loading = true;

    this.query = '';

    if (event.rows) {
      if (event.rows > 0) {
        this.query += `?$top=${event.rows}`;
      }
    }

    if (event.first) {
      if (event.first > 0) {
        this.query += `&$skip=${event.first}`;
      }
    }

    if (event.filters) {
      const filterOData: string[] = [];
      for (let filterProperty in event.filters) {
        if (event.filters.hasOwnProperty(filterProperty)) {
          const filters = event.filters[filterProperty];

          let filtersTotalCount: number = (filters as any).length;
          let actualFilterPosition: number = 0;
          for (let filtersOfProperty in filters) {
            let filter = filters[filtersOfProperty] as FilterMetadata;

            if (
              filter.matchMode &&
              filter.matchMode !== '' &&
              filter.value !== '' &&
              filter.value !== null
            ) {
              const params = filter.matchMode.toLowerCase().split(':');
              const operator = params[0];
              const odataProperty = filterProperty.replace(/\./g, '/');
              switch (operator) {
                case 'length':
                case 'day':
                case 'fractionalseconds':
                case 'hour':
                case 'minute':
                case 'month':
                case 'second':
                case 'totaloffsetminutes':
                case 'totalseconds':
                case 'year':
                  filterOData.push(`${operator}(${odataProperty}) ${params[1]} ${filter.value}`);
                  break;
                case 'eq':
                case 'ne':
                case 'gt':
                case 'ge':
                case 'lt':
                case 'le':
                  filterOData.push(`${odataProperty} ${operator} ${filter.value}`);
                  break;
                case 'contains':
                case 'endswith':
                case 'startswith':
                  filterOData.push(`${operator}(${odataProperty},'${filter.value}')`);
                  break;
                default:
                // no action
              }

              actualFilterPosition++;
              if(actualFilterPosition != filtersTotalCount){
                var stringFilter = filterOData.pop() +" "+  filter.operator+" ";
                filterOData.push(stringFilter);
              }
            }
          }
        }
      }

      if (filterOData.length > 0) {
        this.query += '&$filter=' + filterOData.join("");
      }
    }

    if (event.sortField) {
      const sortOrder: string = event.sortOrder && event.sortOrder > 0 ? 'asc' : 'desc';
      let orderby = this.toStringArray(event.sortField + ' ' + sortOrder);
      this.query += '&$orderby=' + orderby.join();
    }

    let url = this.query;
    let getOdata = '?$filter=contains(Name,%20%27B%27)&$count=true&$top=5';

    setTimeout(() => {
      this._contentService.getOdata(this.query).subscribe(x => {
        let totalitens = (x as any)['value'];
        this.content = (totalitens as ContentDto[]).slice(0, 10);
        this.totalRecords = (x as any)['@odata.count'];
        this.loading = false;
      });
    }, 1000);
  }

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedContent = value;
  }

  onSelectAllChange(event: any) {
    const checked = event.checked;

    if (checked) {
      this._contentService.get().subscribe(x => {
        this.selectedContent = (x as any)['value'];
        this.selectAll = true;
      });
    } else {
      this.selectedContent = [];
      this.selectAll = false;
    }
  }

  toStringArray(input: string | string[] | IEnumerable<string> | IQueryable<string>): string[] {
    if (!input) {
      return [];
    }

    if (input instanceof String || typeof input === 'string') {
      return input.split(',').map(s => s.trim());
    }

    if (input instanceof Array) {
      return input;
    }

    return input.toArray();
  }
}
