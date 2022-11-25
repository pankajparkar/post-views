import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { PostsService } from '../shared/services/posts.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pv-user-edit',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
  ],
  template: `
    <h2>Post Edit</h2>
    <form *ngIf="post" (ngSubmit)="submit()" novalidate name="editPost" ngForm>
      <label>
        Id: 
        <input type="text" readonly [value]="post.id" >
      </label>
      <label>
        Name: 
        <input type="text" name="title" [(ngModel)]="post.title" >
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
    private router: Router,
  ) {
  }

  getPost(id: number) {
    this.postsService.getPostById(id)
      .subscribe((post) => this.post = post);
  }

  submit() {
    this.postsService.updatePost(
      +this.route.snapshot.params['id'],
      this.post
    ).subscribe(() => {
      alert('Data updated successfully.');
      this.router.navigate(['/user/list']);
    });
  }

  ngOnInit() {
    this.getPost(+this.route.snapshot.params['id'])
  }
}
