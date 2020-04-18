import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsListComponent} from "./components/comments-list/comments-list.component";
import {CommentResolverService} from "./services/comment-resolver.service";
import {PostComponent} from "../post/components/post/post.component";


const routes: Routes = [
  {path: '',
    component: CommentsListComponent,
    // resolve: {allComments: CommentResolverService},
    children: [{path: ':id/post', component: PostComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
