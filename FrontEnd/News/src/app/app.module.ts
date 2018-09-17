import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import {
  FooterComponent,
  HeaderComponent
} from './shared/layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    FooterComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
