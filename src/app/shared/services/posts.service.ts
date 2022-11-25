import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<any[]>(`${API_URL}/posts`);
  }

  getPostById(id: number) {
    return this.http.get<any>(`${API_URL}/posts/${id}`);
  }

  updatePost(id: number, post: any) {
    return this.http.patch<any>(`${API_URL}/posts/${id}`, post);
  }
}
