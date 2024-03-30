import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ContentDto, CreateUpdateContentDto } from '../contracts/models';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  apiName = 'Default';
  

  create = (input: CreateUpdateContentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentDto>({
      method: 'POST',
      url: '/api/app/content',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/content/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentDto>({
      method: 'GET',
      url: `/api/app/content/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateContentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentDto>({
      method: 'PUT',
      url: `/api/app/content/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
