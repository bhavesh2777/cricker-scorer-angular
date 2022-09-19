import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  now: number;
  value = '';
  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  ngOnInit(): void {}
}
