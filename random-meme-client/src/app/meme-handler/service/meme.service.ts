import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
export interface Meme {
  id: number;
  image: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private router: Router, private http: HttpClient) {}
  api = 'https://meme-generator-angular.herokuapp.com';

  //Single meme
  generateMeme() {
    return this.http.get<Meme[]>(`${this.api}/memes/1`);
  }

  //Multiple memes
  generateNmeme(n: number) {
    return this.http.get<Meme[]>(`${this.api}/memes/${n}`);
  }
}
