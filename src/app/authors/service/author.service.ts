import { Author } from '../model/author';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const Url = 'http://localhost:8080/books-api/';
@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);
  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id);
  }
}