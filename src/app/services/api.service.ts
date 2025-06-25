import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getPostsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts?userId=${userId}`);
  }

  getPost(postId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts/${postId}`);
  }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/comments?postId=${postId}`);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }
}
