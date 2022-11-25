import { DatePipe, JsonPipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { PostsService } from './shared/services/posts.service';

@Component({
  selector: 'pv-root',
  standalone: true,
  template: `
    <div *ngIf="!selectedPost">
      <h2>User List</h2>
      <ul>
        <li *ngFor="let post of posts" (click)="selectPost(post)">
          {{ post.title }}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedPost">
      <h2>Post Edit</h2>
      <form>
        <label>
          Id: 
          <input type="text" readonly [value]="selectedPost.id" >
        </label>
        <label>
          Name: 
          <input type="text" [value]="selectedPost.title" >
        </label>
        <button type="submit">Save</button>
        <button type="button" (click)="selectPost(undefined)">Cancel</button>
      </form>
    </div>
  `,
  imports: [
    NgForOf,
    NgStyle,
    DatePipe,
    JsonPipe,
    NgIf,
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