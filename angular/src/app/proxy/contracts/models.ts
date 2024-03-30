import type { FullAuditedEntityDto } from '@abp/ng.core';

export interface ContentDto extends FullAuditedEntityDto<string> {
  title?: string;
  body: number;
}

export interface CreateUpdateContentDto {
  title?: string;
  body: number;
}
