import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  btnText: string = '';
  directTo: string = '';
  constructor(private router: Router) {
    this.directTo = this.router.url === '/about' ? '' : 'about';
    this.btnText = this.router.url === '/about' ? 'Back' : 'About';
  }
  ngOnInit(): void {}
}
