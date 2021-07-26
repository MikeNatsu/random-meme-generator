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
  api = 'http://localhost:4001';

  //Single meme
  generateMeme() {
    return this.http.get<Meme[]>(`${this.api}/memes/1`);
  }

  //Multiple memes
  generateNmeme(n: number) {
    return this.http.get<Meme[]>(`${this.api}/memes/${n}`);
  }
}
