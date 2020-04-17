import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from "./components/post/post.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";


@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
