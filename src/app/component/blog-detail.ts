import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Blog } from '../component/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: '../view/blog-detail.html'
})
export class BlogDetail implements OnInit {
  blog: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.blogService.getBlog(id)
      .subscribe(blog => this.blog = blog);
  }

  goBack(): void {
    this.location.back();
  }

}