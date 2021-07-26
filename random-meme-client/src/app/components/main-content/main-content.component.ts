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
  subscription: Subscription;

  constructor(private memeService: MemeService) {
    this.subscription = this.memeService.generateMeme().subscribe((res) => {
      this.currentMemes = res;
    });
    this.memeService.generateMeme().subscribe(pipe((res : Meme)=>{ this.currentMemes = res}))
  }
  ngOnInit(): void {
    console.log(this.currentMemes);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
