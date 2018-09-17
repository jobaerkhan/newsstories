import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoryComponent } from './story.component';
import { StoryResolver } from './story-resolver.service';
//import { SharedModule } from '../shared';
import { StoryRoutingModule } from './story-routing.module';

@NgModule({
  imports: [
    StoryRoutingModule
  ],
  declarations: [
    StoryComponent
  ],

  providers: [
    StoryResolver
  ]
})
export class ArticleModule {}
