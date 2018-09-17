import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story.component';
import { StoryResolver  } from './story-resolver.service';

const routes: Routes = [
  {
    path: ':id',
    component: StoryComponent,
    resolve: {
      story: StoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule {}
