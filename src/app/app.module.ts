import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Post } from './data/post';

import { AppRoutingModule } from './app-routing.module';

import { App } from './component/app';
import { Home } from './component/home';
import { BlogDetail } from './component/blog-detail';
import { Blogs } from './component/blogs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      Post, { dataEncapsulation: false }
    )
  ],
  declarations: [
    App,
    Home,
    Blogs,
    BlogDetail,
  ],
  bootstrap: [ App ]
})
export class AppModule { }