import { DatePipe, JsonPipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './shared/services/posts.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'pv-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
    <!-- <div *ngIf="!selectedPost">
      <pv-user-list></pv-user-list>
    </div>
    <div *ngIf="selectedPost">
      <pv-user-edit></pv-user-edit>
    </div> -->
  `,
  imports: [
    NgForOf,
    NgStyle,
    DatePipe,
    JsonPipe,
    NgIf,
    UserListComponent,
    UserEditComponent,
    RouterOutlet,
  ],
  styles: [],
})
export class AppComponent {
  name: string = 'World';
  posts: any[] = [];
  selectedPost: any;
  date = new Date();

  constructor(
    private postsService: PostsService
  ) {

  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

  selectPost(post: any) {
    this.selectedPost = post;
  }
}