import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overs',
  templateUrl: './overs.component.html',
  styleUrls: ['./overs.component.css'],
})
export class OversComponent implements OnInit {
  oversArray = [{}, {}];
  constructor() {}

  ngOnInit(): void {}
}
