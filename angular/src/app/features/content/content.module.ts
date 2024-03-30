import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { SharedModule } from '../../shared/shared.module';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ContentComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    TableModule
  ]
})
export class ContentModule { }
