import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  apiName = 'Default';


  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/app/Content',
    },
    { apiName: this.apiName,...config });

  getOdata = (odataParams: string, config?: Partial<Rest.Config>) =>
  this.restService.request<any, number>({
    method: 'GET',
    url: '/api/app/Content'+odataParams
  },
  { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
