import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user/user.component';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './default/default.component';
import {UsersListComponent} from './users-list/users-list.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {CommentsListComponent} from './comments-list/comments-list.component';
import {UserResolverService} from '../services/user-resolver.service';
import {PostResolverService} from '../services/post-resolver.service';
import {CommentResolverService} from '../services/comment-resolver.service';

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {path: 'users', component: UsersListComponent, resolve: {allUsers: UserResolverService}},
  {path: 'posts', component: PostsListComponent, resolve: {allPosts: PostResolverService}},
  {path: 'comments', component: CommentsListComponent, resolve: {allComments: CommentResolverService}},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    DefaultComponent,
    UsersListComponent,
    PostsListComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
