import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { EditableStoryResolver } from './editable-story-resolver.service';
import { SharedModule } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent
  },
  {
    path: ':id',
    component: EditorComponent,
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
