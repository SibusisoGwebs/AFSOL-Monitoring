import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADD_VIDEOFOOTAGE_TO_HISTORY, ADD_VIDEO_FOOTAGE, DELETE_VIDEOFOOTAGE_TICKET, FETCH_ALL_VIDEO_FOOTAGE, FETCH_ONE_VIDEO_FOOTAGE } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class VideoFootageService {

  constructor(private http: HttpClient) { }

  addRequestVideo(form: object){
    this.http.post(ADD_VIDEO_FOOTAGE, form).subscribe(() => {
      console.log('Request was Added...');
    })
  }

  // addTechOnVideo(form: object){
  //   this.http.post(ADD_VIDEO_FOOTAGE, form).subscribe(() => {
  //     console.log('Request was Added...');
  //   })
  // }

  addRequestVideoToHistory(form: object){
    this.http.post(ADD_VIDEOFOOTAGE_TO_HISTORY, form).subscribe(() => {
      console.log('Request was Added...');
    })
  }

  fetchAllRequest(){
    return this.http.get(FETCH_ALL_VIDEO_FOOTAGE);
  }

  deleteOneVideoFootage(param: string){
    this.http.delete('http://localhost:5000/bureau/video-footage/delete/' + param);
  }

  fetchOneVideoFootage(param: string){
    return this.http.get(FETCH_ONE_VIDEO_FOOTAGE + param);
  }

  deleteFootage(param: string){
    this.http.delete(`http://localhost:5000/bureau/video-footage/delete/${param}`).subscribe(() => {
      console.log(`${param} closed...`);
    })
  }
}
