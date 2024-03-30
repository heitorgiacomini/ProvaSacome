import type { IEdmExpression, IEdmTypeReference } from '../models';

export interface IEdmDirectValueAnnotationsManager {
}

export interface IEdmTerm {
  type: IEdmTypeReference;
  appliesTo?: string;
  defaultValue?: string;
}

export interface IEdmVocabularyAnnotatable {
}

export interface IEdmVocabularyAnnotation {
  qualifier?: string;
  term: IEdmTerm;
  target: IEdmVocabularyAnnotatable;
  value: IEdmExpression;
}
