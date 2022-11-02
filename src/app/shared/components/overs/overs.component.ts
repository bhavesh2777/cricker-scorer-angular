import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TempMatch } from 'src/app/models/match.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-overs',
  templateUrl: './overs.component.html',
  styleUrls: ['./overs.component.css'],
})
export class OversComponent implements OnInit {
  @Input() isActiveMatch: boolean;
  oversArray = [];
  activeMatchSub: Subscription;

  constructor(private readonly commonService: CommonService) {}

  ngOnInit() {
    this.activeMatchSub = this.commonService.activeMatch.subscribe(
      (activeMatchObj: TempMatch) => {
        const tempOverArr = activeMatchObj?.currentInnings?.thisOver;
        tempOverArr.sort((a, b) => b.overNo - a.overNo);
        if (this.isActiveMatch) this.oversArray = [tempOverArr[0]];
        else this.oversArray = tempOverArr;
      }
    );
  }

  ngOnDestroy() {
    this.activeMatchSub?.unsubscribe();
  }
}
