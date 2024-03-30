import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard,PermissionGuard} from '@abp/ng.core';
import { ContentComponent } from './content.component';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';

const routes: Routes = [
  { path: '', component: ContentComponent, canActivate: [AuthGuard, PermissionGuard] },
  {
    path: ':id',
    component: ContentViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
