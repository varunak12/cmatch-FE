import { Component, OnInit,Inject } from '@angular/core';
import{MatSnackBar,MatDialogRef,MAT_DIALOG_DATA, MatDialog} from '@angular/material';

import { ActivatedRoute, Router } from '@angular/router';
import { match } from '../match';
import { MatchService } from '../match.service';
@Component({
 selector: 'match-viewscore',
 templateUrl: './view-score.component.html',
 styleUrls: ['./view-score.component.css']
})
export class ViewscoreComponent implements OnInit {
 currentmatches:Array<match>;
 viewscore:Array<match>
 constructor(public snackbar:MatSnackBar,
   public dialogRef:MatDialogRef<ViewscoreComponent>,@Inject(MAT_DIALOG_DATA)
 public data:any,private cricketService:MatchService) {
console.log(data.obj);
this.viewscore=[];
   this.cricketService.getMatchScore(data.obj.unique_id).subscribe((data)=>{
     console.log(data);
     // if(data['data']['bowling']['ODIs']===undefined)
     // {
     // this.playerBio=data;
     // this.noOdi=true;
     // }
     // else{
     //   this.playerBio=data;
     //   this.noOdi=false;
     // }
     this.viewscore=data;
   })
  }
  onNoClick(){
   this.dialogRef.close();
 }
 ngOnInit() {
 }
}