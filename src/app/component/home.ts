import { Component, OnInit } from '@angular/core';
import { Blog } from '../component/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: '../view/home.html'
})
export class Home implements OnInit {
  welcome = 'Welcome to Astronot Angular';
  desc = 'Build your fast single page app website with astronot angular.';
  btn ='Get Started';
  btnurl ='/blog';
  cover ='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLsYTt7_L2TRCL5rAvozGKoFaj6inx9YZfpbHvjG7PDb1L1o0UxYQ4bhGbrFr3uHty0lg4XNuYMtil5US5HRKoqjswVGuYp7dDRnbu3umD8w78IoFV1qJQBunbmUP_qS579KFupNkVL41mJfgXY8O-jzFOp-G_zg7is-DfUzQi7a0BPgWr44mWzwzVxQ/s600/astronots.png';
  blogs: Blog[] = [];  

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs.slice(0, 3));
  }
}