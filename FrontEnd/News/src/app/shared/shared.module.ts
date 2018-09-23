import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoryListComponent, StoryMetaComponent, StoryPreviewComponent } from './story-helpers';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

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
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    StoryListComponent,
    StoryMetaComponent,
    StoryPreviewComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
