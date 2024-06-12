import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://webapi.autodoc.ru/api/news';

  constructor(private http: HttpClient) { }

  getNews(page: number, pageSize: number):Observable<any> {
    const url = `${this.apiUrl}/${page}/${pageSize}`;
    return this.http.get<any[]>(url);
  }
}
