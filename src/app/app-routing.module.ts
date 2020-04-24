import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './default/default.component';

const routes: Routes = [
  // locahost:4200/ -> default component
  {
    path: '',
    component: DefaultComponent
  },   // app.component.html -> router-outlet
  {path: 'users', loadChildren: () => import('../app/user/user.module').then(module => module.UserModule)},
  // app.component.html -> router-outlet
  {path: 'posts', loadChildren: () => import('../app/post/post.module').then(module => module.PostModule)},
  // app.component.html -> router-outlet
  {path: 'comments', loadChildren: () => import('../app/comment/comment.module').then(module => module.CommentModule)}
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
export class AppRoutingModule {
}
