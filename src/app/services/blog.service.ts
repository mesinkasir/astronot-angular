import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Blog } from '../component/blog';
import { MessageService } from '../services/message.service';


@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogsUrl = 'api/blogs';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogsUrl)
      .pipe(
        tap(_ => this.log('fetched blogs')),
        catchError(this.handleError<Blog[]>('getBlogs', []))
      );
  }

  getBlogNo404<Data>(id: number): Observable<Blog> {
    const url = `${this.blogsUrl}/?id=${id}`;
    return this.http.get<Blog[]>(url)
      .pipe(
        map(blogs => blogs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} blog id=${id}`);
        }),
        catchError(this.handleError<Blog>(`getBlog id=${id}`))
      );
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.blogsUrl}/${id}`;
    return this.http.get<Blog>(url).pipe(
      tap(_ => this.log(`fetched blog id=${id}`)),
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }

  searchBlogs(term: string): Observable<Blog[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Blog[]>(`${this.blogsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found blogs matching "${term}"`) :
         this.log(`no blogs matching "${term}"`)),
      catchError(this.handleError<Blog[]>('searchBlogs', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`BlogService: ${message}`);
  }
}