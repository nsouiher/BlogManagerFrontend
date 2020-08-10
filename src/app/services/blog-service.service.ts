import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  host:any;
  constructor(private http: HttpClient) {
    this.host = 'http://localhost:8080';
   }

  getAllBlogs(): Observable<any> {

    return this.http.get(this.host+'/allBlogs');

  }
  createBlog(blog:any): Observable<any> {
    return this.http.post(this.host+"/createblog" ,blog);
  }
  deleteBlog(id:any): Observable<any> {
    return this.http.delete(this.host+"/deleteBlog/"+id);
  }
}
