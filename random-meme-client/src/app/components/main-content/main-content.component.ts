import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meme, MemeService } from '../../meme-handler/service/meme.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  currentMemes: any = [];
  subscription: Subscription | undefined;

  constructor(private memeService: MemeService) {}
  ngOnInit(): void {
    this.memeService
      .generateNmeme(1)
      .pipe(take(1))
      .subscribe((res) => {
        this.currentMemes = res;
        console.log(res);
      });
  }

  newMeme() {
    this.memeService
      .generateMeme()
      .pipe(take(1))
      .subscribe((res) => {
        this.currentMemes = res;
      });
  }
}
