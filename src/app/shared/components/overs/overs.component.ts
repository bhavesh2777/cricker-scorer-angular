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
        const tempOverArr = activeMatchObj?.currentInnings?.thisOver;
        // Activate after temp code is done
        // tempOverArr.sort((a, b) => a.overNo + b.overNo);
        // console.log('tempOverArr', tempOverArr);

        this.oversArray = tempOverArr;
      }
    );
  }

  ngOnDestroy() {
    this.activeMatchSub?.unsubscribe();
  }
}
