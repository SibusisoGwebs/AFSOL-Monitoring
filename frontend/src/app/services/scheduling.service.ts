import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient) { }

  SchedulingFleet(form: object){
    this.http.post('http://localhost:5000/bureau/schedule/post', form).subscribe(() => {
      console.log('New Fleet Scheduled...');
    });
  }

  removeSchedule(ticket: string){
    this.http.delete(`http://localhost:5000/bureau/schedule/delete/${ticket}`).subscribe(() => {
      console.log(`Schedule with ticket ${ticket}} is Completed...`);
    });
  }

  fetchAllSchedules(){
    return this.http.get('http://localhost:5000/bureau/schedule/fetchallSchedules')
  }
}
