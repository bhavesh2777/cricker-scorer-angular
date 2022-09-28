import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  sideNav = new BehaviorSubject<any>(null);
  constructor() {}
}
