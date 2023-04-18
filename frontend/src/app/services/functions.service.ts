import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GENERATE_VIDEOFOOTAGE_TICKET, POST_VIDEOFOOTAGE_TICKET } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private http: HttpClient) { }

  fetchcount(){
    return this.http.get('http://localhost:5000/bureau/maintainance/count')

  }

  ticketFunction(form: object){
    this.http.post('http://localhost:5000/bureau/ticket/post', form).subscribe(() => {
      console.log('New Ticket In...');
    });
  }

  fetchVideofootageTicket(){
    return this.http.get(GENERATE_VIDEOFOOTAGE_TICKET)

  }

  PostVideofootageTicket(form: object){
    this.http.post(POST_VIDEOFOOTAGE_TICKET, form).subscribe(() => {
      console.log('New Video Ticket In...');
    })
  }


}
