import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';

import { MatchService } from '../match.service';
@Component({
 selector: 'match-upcoming',
 templateUrl: './upcoming.component.html',
 styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
 upcomingMatches:Array<any>;
 constructor(private matchService:MatchService)
 {
   
  }
 ngOnInit() {
   this.matchService.getUpcomingMatches().subscribe((matches)=>{
     console.log("upcoming matches")
     this.upcomingMatches = matches['matches'];
     console.log(matches);
   });
 }


}