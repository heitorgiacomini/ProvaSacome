import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IEdmModel } from '../../../../odata/edm/models';
import type { ODataServiceDocument } from '../../../../odata/models';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  apiName = 'Default';
  

  getMetadata = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IEdmModel>({
      method: 'GET',
      url: '/api/app/$metadata',
    },
    { apiName: this.apiName,...config });
  

  getServiceDocument = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ODataServiceDocument>({
      method: 'GET',
      url: '/api/app',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
