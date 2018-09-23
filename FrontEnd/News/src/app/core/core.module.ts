import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.interceptor';

import {
  ApiService,
  StoriesService,
  AuthGuard,
  TokenService,
  UserService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    StoriesService,
    AuthGuard,
    TokenService,
    UserService
  ],
  declarations: []
})
export class CoreModule { }
