import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './components/posts-list/posts-list.component';
import {PostResolverService} from './services/post-resolver.service';


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
    path: '',
    component: PostsListComponent,
    resolve: {allPosts: PostResolverService},
    children: [
      // /users
      {path: '', loadChildren: () => import('../comment/comment.module').then(module => module.CommentModule)}]
  },
  {
    path: ':id/posts',   // /users/100/posts
    component: PostsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
