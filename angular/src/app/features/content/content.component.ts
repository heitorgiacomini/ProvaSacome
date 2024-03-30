import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ContentService } from '@proxy/services';
import { ContentDto } from '@proxy/contracts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class ContentComponent {
  content = { items: [], totalCount: 0 } as PagedResultDto<ContentDto>;

  form: FormGroup;

  selectedContent = {} as ContentDto;

  isModalOpen = false;

  constructor(
    public readonly list: ListService,
    private contentService: ContentService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {
  }

  // ngOnInit() {
  //   // const contentStreamCreator = (query) => this.contentService.getList(query);

  //   // this.list.hookToQuery(contentStreamCreator).subscribe((response) => {
  //   //   this.content = response;
  //   // });
  // }

  createContent() {
    this.selectedContent = {} as ContentDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editContent(id: string) {
    this.contentService.get(id).subscribe((content) => {
      this.selectedContent = content;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
    title: [this.selectedContent.title || null, Validators.required],
    body: [this.selectedContent.body || null, Validators.required],
   // publishDate: [
   //   this.selectedContent.publishDate ? new Date(this.selectedContent.publishDate) : null,
   //   Validators.required,
   // ],
    });
  }


  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedContent.id
      ? this.contentService.update(this.selectedContent.id, this.form.value)
      : this.contentService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.contentService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
