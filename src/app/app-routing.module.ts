import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./default/default.component";
import {UsersListComponent} from "./user/components/users-list/users-list.component";
import {UserResolverService} from "./user/services/user-resolver.service";
import {PostsListComponent} from "./post/components/posts-list/posts-list.component";
import {PostResolverService} from "./post/services/post-resolver.service";
import {CommentsListComponent} from "./comment/components/comments-list/comments-list.component";
import {CommentsResolverService} from "./comment/services/comments-resolver.service";
import {CommentResolverService} from "./comment/services/comment-resolver.service";
import {PostComponent} from "./post/components/post/post.component";

const routes: Routes = [
  // locahost:4200/ -> default component
  {path: '',
    component: DefaultComponent},   // app.component.html -> router-outlet
  {path: 'users', loadChildren: () => import('../app/user/user.module').then(module => module.UserModule)},
  {path: 'posts', loadChildren: () => import('../app/post/post.module').then(module => module.PostModule)}, // app.component.html -> router-outlet
  {path: 'comments', loadChildren: () => import('../app/comment/comment.module').then(module => module.CommentModule)} // app.component.html -> router-outlet
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
