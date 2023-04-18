import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getGeolocation(){
    navigator.geolocation.watchPosition((position) => {
      const {latitude, longitude, accuracy, altitude, speed} = position.coords
      console.log(latitude)
    })
  }

  addToMaintainanceHistory(form: object){
    this.http.post('http://localhost:5000/bureau/maintainanceHistory/post', form).subscribe(() => {
      console.log('Maintainance Added To History...');
    });
  }

  fetchAllScheduledFleet(){
    return this.http.get(`http://localhost:5000/bureau/maintainanceHistory/fetchallFleet`);
  }

  fetchOneScheduledFleet(ticket: string){
    return this.http.get(`http://localhost:5000/bureau/maintainanceHistory/fetchoneFleet/${ticket}`);
  }
}
