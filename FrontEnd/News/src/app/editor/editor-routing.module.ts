import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { EditableStoryResolver } from './editable-story-resolver.service';
import { SharedModule } from '../shared';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':Id',
    component: EditorComponent,
    canActivate: [AuthGuard],
    resolve: {
      story: EditableStoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
