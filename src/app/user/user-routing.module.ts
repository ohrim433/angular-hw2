import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserResolverService} from './services/user-resolver.service';


// const routes: Routes = [
//   // localhost:4200/users -> UsersList Component
//   {path: 'users',
//     component: UsersListComponent, // app.component.html in -> router outlet
//     resolve: {allUsers: UserResolverService},
//     loadChildren: () => import('../post/post.module').then(module => module.PostModule)
//
//     // users/100/posts
//     // children: [
//     //   {
//     //     path: ':id/posts',
//     //     component: PostsListComponent     // post-list.component.html -> router-outlet
//     //   }]
//   }
// ];

const routes: Routes = [
  // localhost:4200/users -> UsersList Component
  {
    path: '',
    component: UsersListComponent, // app.component.html in -> router outlet
    resolve: {allUsers: UserResolverService},
    children: [
      // /users
      {path: '', loadChildren: () => import('../post/post.module').then(module => module.PostModule)}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
