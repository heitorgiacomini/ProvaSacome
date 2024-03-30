import { mapEnumToOptions } from '@abp/ng.core';

export enum EdmSchemaElementKind {
  None = 0,
  TypeDefinition = 1,
  Term = 2,
  Action = 3,
  EntityContainer = 4,
  Function = 5,
}

export const edmSchemaElementKindOptions = mapEnumToOptions(EdmSchemaElementKind);
