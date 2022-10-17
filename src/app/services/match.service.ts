import { Injectable } from '@angular/core';
import {
  ExtraRunType,
  OneBallElement,
  ScoreRunDetails,
  TempMatch,
} from '../models/match.model';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private readonly commonService: CommonService) {}

  scoreOneBall(scoreRunObj: ScoreRunDetails) {
    // Make all the changes on object
    // const tempActiveMatch = JSON.parse(
    //   JSON.stringify(this.commonService.activeMatch.value)
    // );

    // temporary using same object
    const tempActiveMatch = this.commonService.activeMatch.value;
    const score = tempActiveMatch.currentInnings.score;
    const thisOver = tempActiveMatch.currentInnings.thisOver;
    const batsman = tempActiveMatch.currentInnings.batsman;
    const bowler = tempActiveMatch.currentInnings.bowler;
    const tempTotalBalls = score.totalBalls;
    // Update general score object
    const isValidBall = !scoreRunObj.noBall && !scoreRunObj.wideType;
    if (isValidBall) score.totalBalls++;
    else {
      if (scoreRunObj.noBall) score.extraRuns.noBall++;
      else if (scoreRunObj.wideType) score.extraRuns.wide++;
    }
    if (scoreRunObj.wicket) score.totalWickets++;
    score.totalRuns += scoreRunObj.runScored;

    const totalOvers = this.commonService.ballsToOvers(score.totalBalls);
    const runRate = (score.totalRuns / totalOvers).toFixed(2);
    score.currRunrate = runRate;

    // Update this over
    const currentBall = new OneBallElement(
      1,
      scoreRunObj.runScored,
      scoreRunObj.wicket,
      isValidBall,
      !isValidBall ? 1 : 0,
      !isValidBall
        ? scoreRunObj.noBall
          ? ExtraRunType.NoBall
          : ExtraRunType.Wide
        : null
    );
    const thisOverNo = this.commonService.ballsToWhichOver(tempTotalBalls);
    const currOverIndex = thisOver.findIndex((el) => el.overNo === thisOverNo);
    if (currOverIndex !== -1) {
      const currOverObj = thisOver[currOverIndex];
      currOverObj.runsConceded += scoreRunObj.runScored;
      currOverObj.allBalls.push(currentBall);
    } else {
      const newOver = {
        overNo: thisOverNo,
        runsConceded: scoreRunObj.runScored,
        allBalls: [currentBall],
      };
      thisOver.push(newOver);
    }
    // Temporrary sort:remove after subscription code done
    thisOver.sort((a, b) => b.overNo - a.overNo);

    // Update Batsman
    console.log('batsman', batsman);

    // Update Bowler

    // console.log('tempActiveMatch', tempActiveMatch);

    // Push the changes on subject
    // Subscribe to the changes
    return true;
  }
}
