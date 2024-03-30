import { mapEnumToOptions } from '@abp/ng.core';

export enum EdmTypeKind {
  None = 0,
  Primitive = 1,
  Entity = 2,
  Complex = 3,
  Collection = 4,
  EntityReference = 5,
  Enum = 6,
  TypeDefinition = 7,
  Untyped = 8,
  Path = 9,
}

export const edmTypeKindOptions = mapEnumToOptions(EdmTypeKind);
