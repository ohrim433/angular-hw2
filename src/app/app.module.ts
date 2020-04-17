import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DefaultComponent} from './default/default.component';
import {AppRoutingModule} from "./app-routing.module";
import {UserModule} from "./user/user.module";
import {PostModule} from "./post/post.module";
import {CommentModule} from "./comment/comment.module";

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
