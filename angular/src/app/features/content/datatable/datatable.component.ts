import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { ContentDto } from '@proxy/contracts';
import { ContentService } from '@proxy/controllers';
import { FilterMetadata, LazyLoadEvent } from 'primeng/api';
import { Rest } from '@abp/ng.core';
import { IEnumerable, IQueryable } from 'linq-collections';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss',
})
export class DatatableComponent implements OnInit {
  cols: any[];
  content: ContentDto[];

  // ngOnInit() {
  //   this._contentService.get().subscribe(x => {
  //     this.content = (x as any)['value'];
  //   });
  //   this.cols = [{ field: 'name', header: 'name' }];
  // }

  customers!: ContentDto[];

  totalRecords!: number;

  loading: boolean = false;

  selectAll: boolean = false;

  selectedContent!: ContentDto[];
  config?: Partial<Rest.Config>;
  constructor(private _contentService: ContentService) {}

  ngOnInit() {
    this.loading = true;
  }

  // private query: ODataQuery<ContentDto>;
  query: string = '';
  loadContent(event: LazyLoadEvent) {
    this.loading = true;

    // this.query = this.odata
    //   .Query()
    //   .Expand('Orders')
    //   .Select([
    //     'Name'
    //   ]);

    //reset query value
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
          // const filter = event.filters[filterProperty] as FilterMetadata;
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

              // Replace Boss.Name by Boss/Name
              const odataProperty = filterProperty.replace(/\./g, '/');

              // http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html
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
        // this.query = this.query.Filter(filterOData.join(' and '));
      }
    }

    if (event.sortField) {
      const sortOrder: string = event.sortOrder && event.sortOrder > 0 ? 'asc' : 'desc';
      let orderby = this.toStringArray(event.sortField + ' ' + sortOrder);
      this.query += '&$orderby=' + orderby.join();
      // this.query = this.query.OrderBy(event.sortField + ' ' + sortOrder);
    }

    let url = this.query;
    let getOdata = '?$filter=contains(Name,%20%27B%27)&$count=true&$top=5';

    setTimeout(() => {
      this._contentService.getOdata(this.query).subscribe(x => {
        let totalitens = (x as any)['value'];
        this.content = (totalitens as ContentDto[]).slice(0, 10);
        // https://localhost:44341/api/app/Content?$count=true
        this.totalRecords = 200;
        // this.totalRecords = (x as any)['@odata.count'];
        this.loading = false;
      });

      // this._contentService.getContents({ lazyEvent: JSON.stringify(event) }).then(res => {
      //   this.customers = res.customers;
      //   this.totalRecords = res.totalRecords;
      //   this.loading = false;
      // });
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
