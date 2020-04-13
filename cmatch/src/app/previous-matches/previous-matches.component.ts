import { Component, OnInit } from '@angular/core';

import { MatchService } from '../match.service';
import { MatDialog } from '@angular/material';
import { ViewscoreComponent } from '../view-score/view-score.component';
@Component({
 selector: 'match-previousmatches',
 templateUrl: './previous-matches.component.html',
 styleUrls: ['./previous-matches.component.css']
})
export class PreviousmatchesComponent implements OnInit {
 previousMatches:Array<any>;
 constructor(private matchService:MatchService,
              public dialog:MatDialog) {
                this.previousMatches=[];

  }
 ngOnInit() {
   this.matchService.getPreviousMatches().subscribe((matches)=>{
     console.log("match calendar matches")
     this.previousMatches = matches['matches'];
     console.log(matches);
   });
   }

   viewScore(match){
    console.log("score card");
    const dialogRef = this.dialog.open(ViewscoreComponent, {
      width: '80%',
      data: {obj:match}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
  
   }
