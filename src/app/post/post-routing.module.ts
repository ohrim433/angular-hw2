import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostResolverService} from "./services/post-resolver.service";
import {CommentsListComponent} from "../comment/components/comments-list/comments-list.component";
import {CommentsResolverService} from "../comment/services/comments-resolver.service";


// const routes: Routes = [
//   {path: 'posts',
//     component: PostsListComponent,
//     resolve: {allPosts: PostResolverService},
//     children: [
//       {
//         path: ':id/comments',
//         component: CommentsListComponent,
//         resolve: {comments: CommentsResolverService}
//       }]},
//   // /users
//   {
//     path: '', children: [
//       {
//         path: ':id/posts',
//         component: PostsListComponent}  // users-list.component.html -> router-outlet
//     ]
//   }

  const routes: Routes = [
    {
      path: ':id/posts',   // /users/100/posts
      component: PostsListComponent
    },
    {
      path: '',
      component: PostsListComponent,
      resolve: {allPosts: PostResolverService}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
