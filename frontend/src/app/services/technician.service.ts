import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADD_TECH_ON_VIDEOFOOTAGE } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http: HttpClient) { }

  addCompleteMaintainance(form: object){
    this.http.post('http://localhost:5000/bureau/technician-data/post', form).subscribe(() =>{
      console.log(`Technician Completed a Job`);
    });
  }

  addToTechOnVideo(form: object){
    this.http.post(ADD_TECH_ON_VIDEOFOOTAGE, form).subscribe(() =>{
      console.log(`Videofootage Delivered...`);
    });
  }


}
