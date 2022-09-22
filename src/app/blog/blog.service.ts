import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardBlog } from '../model/card-blog';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<CardBlog[]> {
    return this.http.get<CardBlog[]>('../../assets/responseCardBlog.json');
  }
}
