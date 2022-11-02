import { Injectable } from '@angular/core';
import {
  ExtraRunType,
  OneBallElement,
  OutStatus,
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
    const tempActiveMatch = JSON.parse(
      JSON.stringify(this.commonService.activeMatch.value)
    );

    const score = tempActiveMatch.currentInnings.score;
    const thisOver = tempActiveMatch.currentInnings.thisOver;
    const tempTotalBalls = score.totalBalls;
    // Update general score object
    const isValidBall = !scoreRunObj.noBall && !scoreRunObj.wideType;
    if (isValidBall) score.totalBalls++;
    else {
      if (scoreRunObj.noBall) score.extraRuns.noBall++;
      else if (scoreRunObj.wideType) score.extraRuns.wide++;

      // Implement settings value
      score.totalRuns += 1;
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

    // Update Batsman
    this.updateBatsman(
      tempActiveMatch,
      scoreRunObj,
      isValidBall,
      currOverIndex
    );

    // Update Bowler
    this.updateBowler(tempActiveMatch, scoreRunObj, isValidBall, currOverIndex);

    // Push the changes on subject
    this.commonService.activeMatch.next(tempActiveMatch);

    // Update & push player stats subject
    return true;
  }

  private updateBatsman(
    tempActiveMatch: TempMatch,
    scoreRunObj: ScoreRunDetails,
    isValidBall: boolean,
    currOverIndex: number
  ) {
    const batsman = tempActiveMatch.currentInnings.batsman;
    if (currOverIndex === -1) {
      batsman[0].isOnStrike = !batsman[0].isOnStrike;
      batsman[1].isOnStrike = !batsman[1].isOnStrike;
    }
    const onStrikeBatsman = batsman.find(
      (el) => el.isOnStrike === true && el.outStatus === OutStatus.NOT_OUT
    );
    if (onStrikeBatsman) {
      onStrikeBatsman.runsScored += scoreRunObj.runScored;
      if (isValidBall) onStrikeBatsman.ballsPlayed++;
      if (scoreRunObj.runScored == 4) onStrikeBatsman.fours++;
      else if (scoreRunObj.runScored == 6) onStrikeBatsman.sixes++;
      onStrikeBatsman.outStatus =
        scoreRunObj.wicket == true ? OutStatus.OUT : OutStatus.NOT_OUT;
      onStrikeBatsman.strikeRate = this.commonService.batsmanStrikeRate(
        onStrikeBatsman.runsScored,
        onStrikeBatsman.ballsPlayed
      );
    }
    if (scoreRunObj.runScored == 1 || scoreRunObj.runScored == 3) {
      batsman[0].isOnStrike = !batsman[0].isOnStrike;
      batsman[1].isOnStrike = !batsman[1].isOnStrike;
    }
  }

  private updateBowler(
    tempActiveMatch: TempMatch,
    scoreRunObj: ScoreRunDetails,
    isValidBall: boolean,
    currOverIndex: number
  ) {
    const bowler = tempActiveMatch.currentInnings.bowler;
    const thisOver = tempActiveMatch.currentInnings.thisOver;
    const currentBowler = bowler.find((el) => el.isBowlingCurr === true);
    if (currentBowler) {
      if (isValidBall) {
        currentBowler.ballsThrowed++;
        currentBowler.overs = this.commonService.ballsToOvers(
          currentBowler.ballsThrowed
        );
        if (currOverIndex !== -1) {
          const currOverObj = thisOver[currOverIndex];
          if (
            currOverObj.allBalls.length === 6 &&
            currOverObj.runsConceded == 0
          )
            currentBowler.maidens++;
        }
        if (scoreRunObj.wicket) currentBowler.wickets++;
      } else currentBowler.runsConceded += 1;
      currentBowler.runsConceded += scoreRunObj.runScored;
      currentBowler.economyRate = (
        currentBowler.runsConceded / currentBowler.overs
      ).toFixed(2);
    }
  }

  private countSixValidBalls() {}
}
