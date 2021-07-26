import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Meme {
  _id: number;
  url: string;
  createdAt: Date;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private router: Router, private http: HttpClient) {}
  api = 'https://namo-memes.herokuapp.com';

  //Single meme
  generateMeme(): Observable<any> {
    let data = fetch(`${this.api}/memes/1`).then((res) => {
      return res.json();
    });
    const aMeme = data;
    return new Observable((subscriber) => {
      subscriber.next(aMeme);
    });
  }

  generateNmeme(n: number) {
    return this.http.get<Meme[]>(`${this.api}/memes/${n}`);
  }
}
