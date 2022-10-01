import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TempMatch } from 'src/app/models/match.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-overs',
  templateUrl: './overs.component.html',
  styleUrls: ['./overs.component.css'],
})
export class OversComponent implements OnInit {
  oversArray = [];
  activeMatchSub: Subscription;

  constructor(private readonly commonService: CommonService) {}

  ngOnInit() {
    this.activeMatchSub = this.commonService.activeMatch.subscribe(
      (activeMatchObj: TempMatch) => {
        this.oversArray = activeMatchObj?.currentInnings?.thisOver;
      }
    );
  }

  ngOnDestroy() {
    this.activeMatchSub?.unsubscribe();
  }
}
