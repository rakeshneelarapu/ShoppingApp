import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private httpService: HttpClient) { }

  getPosts() {
    return this.httpService.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: Post) {
    return this.httpService.post('https://jsonplaceholder.typicode.com/posts', post);
  }

}
