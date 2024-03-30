import { mapEnumToOptions } from '@abp/ng.core';

export enum EdmContainerElementKind {
  None = 0,
  EntitySet = 1,
  ActionImport = 2,
  FunctionImport = 3,
  Singleton = 4,
}

export const edmContainerElementKindOptions = mapEnumToOptions(EdmContainerElementKind);
