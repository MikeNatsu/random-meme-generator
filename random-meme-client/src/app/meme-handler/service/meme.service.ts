import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Meme {
  _id: number;
  url: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private router: Router, private http: HttpClient) {}
  api = 'https://namo-memes.herokuapp.com';

  //Single meme
  generateMeme() {
    return this.http.get<Meme>(`${this.api}/memes/1`);
  }

  generateNmeme(n: number) {
    return this.http.get<Meme[]>(`${this.api}/memes/${n}`);
  }


}
