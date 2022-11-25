import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { PostsService } from '../shared/services/posts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pv-user-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
  ],
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let post of posts" [routerLink]="['/user/edit', post.id]">
        {{ post.title }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class UserListComponent {
  posts: any[] = [];

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
}
