import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { SharedModule } from '../../shared/shared.module';
import {TableModule} from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';

@NgModule({
  declarations: [
    ContentComponent,
    DatatableComponent,
    ContentViewerComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    TableModule,
    EditorModule
  ]
})
export class ContentModule { }
