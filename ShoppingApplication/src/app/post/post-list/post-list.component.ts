import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post/post.service';
import { Post } from '../../service/post/post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  // Example for Get HTTp CALL
  ngOnInit() {
    this.postService.getPosts().subscribe((data) =>
      this.posts = data,
      (err) => console.log(err.message));
  }
}
