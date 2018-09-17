import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  StoriesService } from './services/stories.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StoriesService
  ],
  declarations: []
})
export class CoreModule { }
