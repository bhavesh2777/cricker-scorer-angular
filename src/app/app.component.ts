import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sidenavMode = 'side';
  alreadyOpened = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 768) {
      this.sidenavMode = 'over';
      this.alreadyOpened = false;
    } else this.sidenavMode = 'side';
  }
  constructor() {}
  ngOnInit() {
    this.onResize(null);
  }
}
