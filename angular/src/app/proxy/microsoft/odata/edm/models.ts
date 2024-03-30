import type { EdmContainerElementKind } from './edm-container-element-kind.enum';
import type { EdmExpressionKind } from './edm-expression-kind.enum';
import type { IEdmDirectValueAnnotationsManager, IEdmVocabularyAnnotation } from './vocabularies/models';
import type { EdmSchemaElementKind } from './edm-schema-element-kind.enum';
import type { EdmTypeKind } from './edm-type-kind.enum';

export interface IEdmEntityContainer {
  elements: IEdmEntityContainerElement[];
}

export interface IEdmEntityContainerElement {
  containerElementKind: EdmContainerElementKind;
  container: IEdmEntityContainer;
}

export interface IEdmExpression {
  expressionKind: EdmExpressionKind;
}

export interface IEdmModel {
  schemaElements: IEdmSchemaElement[];
  vocabularyAnnotations: IEdmVocabularyAnnotation[];
  referencedModels: IEdmModel[];
  declaredNamespaces: string[];
  directValueAnnotationsManager: IEdmDirectValueAnnotationsManager;
  entityContainer: IEdmEntityContainer;
}

export interface IEdmSchemaElement {
  schemaElementKind: EdmSchemaElementKind;
  namespace?: string;
}

export interface IEdmType {
  typeKind: EdmTypeKind;
}

export interface IEdmTypeReference {
  isNullable: boolean;
  definition: IEdmType;
}
