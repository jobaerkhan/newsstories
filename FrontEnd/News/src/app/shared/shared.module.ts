import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoryListComponent, StoryMetaComponent, StoryPreviewComponent } from './story-helpers';
import { ListErrorsComponent } from './list-errors.component';
//import { ListErrorsComponent } from './list-errors.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    StoryListComponent,
    StoryMetaComponent,
    StoryPreviewComponent,
    ListErrorsComponent
  ],
  exports: [
    StoryListComponent,
    StoryMetaComponent,
    StoryPreviewComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {}
