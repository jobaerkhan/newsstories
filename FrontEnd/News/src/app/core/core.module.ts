import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  ApiService,
  StoriesService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    StoriesService
  ],
  declarations: []
})
export class CoreModule { }
