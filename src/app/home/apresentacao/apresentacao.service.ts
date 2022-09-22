import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CardHome } from './../../model/card-home';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApresentacaoService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<CardHome[]> {
    return this.http.get<CardHome[]>('../../../assets/responseCardHome.json');
  }
}
