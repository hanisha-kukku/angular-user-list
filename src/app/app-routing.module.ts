import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'posts/:userId', component: UserPostsComponent },
  { path: 'post/:postId', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
