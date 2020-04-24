import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsListComponent} from './components/comments-list/comments-list.component';
import {PostComponent} from '../post/components/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: CommentsListComponent,
    // resolve: {allComments: CommentResolverService},
    children: [{path: ':id/post', component: PostComponent}]
  },
  {
    path: ':id/comments',   // /posts/100/comments
    component: CommentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
