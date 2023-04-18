import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaintainModel } from '../shared/maintain.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private http: HttpClient) {}

  fetchMaintainanceList(){
    return this.http.get<MaintainModel[]>('http://localhost:5000/bureau/monitoring/fetchall')
  }

  fetchOneMaintainanceFleet(fleet: string){
    return this.http.get<MaintainModel>(`http://localhost:5000/bureau/monitoring/fetchone/${fleet}`)
  }

  // addFleetToMaintainance(form: object){
  //   this.http.post('http://localhost:5000/bureau/monitoring/post', form).subscribe(() => {
  //     console.log('New Fleet for Maintainance...');
  //   });
  // }

  // removeFleetFromMaintainance(id: number){
  //   this.http.delete(`http://localhost:5000/bureau/maintainance/delete/${id}`).subscribe(() => {
  //     console.log(`Fleet with id ${id} has finished maintainance...`);
  //   });
  // }
}
