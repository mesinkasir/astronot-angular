import { Component, OnInit } from '@angular/core';

import { Blog } from '../component/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: '../view/blogs.html'
})
export class Blogs implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
    .subscribe(blogs => this.blogs = blogs);
  }
  }