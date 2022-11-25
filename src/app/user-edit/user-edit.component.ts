import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { PostsService } from '../shared/services/posts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'pv-user-edit',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
  ],
  template: `
    <h2>Post Edit</h2>
    <form *ngIf="post">
      <label>
        Id: 
        <input type="text" readonly [value]="post.id" >
      </label>
      <label>
        Name: 
        <input type="text" [value]="post.title" >
      </label>
      <button type="submit">Save</button>
      <button type="button" routerLink="/user/list">Cancel</button>
    </form>
  `,
  styles: [
  ]
})
export class UserEditComponent {
  post: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) {
  }

  getPost(id: number) {
    this.postsService.getPostById(id)
      .subscribe((post) => this.post = post);
  }

  ngOnInit() {
    this.getPost(+this.route.snapshot.params['id'])
  }
}
