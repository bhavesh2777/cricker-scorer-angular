import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() drawer: any;
  eSize: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.eSize = window.innerWidth;
  }
  constructor() {}
  ngOnInit(): void {
    this.onResize(null);
  }

  sideNavToggle() {
    if (this.eSize <= 768) this.drawer.toggle();
  }
}
