import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpService:HttpClient) { }

  getUpcomingMatches(): Observable<any> {
    return this.httpService.get('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2');
  }

  getPreviousMatches(): Observable<any> {
    return this.httpService.get('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2');
  }

  getMatchScore(matchId): Observable<any> {
    return this.httpService.get('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2'+'&unique_id=' + matchId);
  }

}
