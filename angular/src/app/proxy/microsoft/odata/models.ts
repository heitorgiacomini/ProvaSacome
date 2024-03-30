
export interface ODataAnnotatable {
  typeAnnotation: ODataTypeAnnotation;
}

export interface ODataEntitySetInfo extends ODataServiceDocumentElement {
}

export interface ODataFunctionImportInfo extends ODataServiceDocumentElement {
}

export interface ODataServiceDocument extends ODataAnnotatable {
  entitySets: ODataEntitySetInfo[];
  singletons: ODataSingletonInfo[];
  functionImports: ODataFunctionImportInfo[];
}

export interface ODataServiceDocumentElement extends ODataAnnotatable {
  url: any;
  name?: string;
  title?: string;
}

export interface ODataSingletonInfo extends ODataServiceDocumentElement {
}

export interface ODataTypeAnnotation {
  typeName?: string;
}
