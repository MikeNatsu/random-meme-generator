import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { Meme, MemeService } from '../../meme-handler/service/meme.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit, OnDestroy {
  currentMemes: Meme[] | Meme | undefined;
  subscription: Subscription | undefined;

  constructor(private memeService: MemeService, private http: HttpClient) {}
  ngOnInit(): void {
    this.memeService.generateMeme().subscribe((res) => console.log(res));
  }
  ngOnDestroy(): void {}
}
