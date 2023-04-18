import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sample_monitor_data } from '../shared/data.sample';
import { MaintainanceModel, MaintainModel } from '../shared/maintain.model';
import { MaintainanceFleetModel } from '../shared/maintainanceFleet.model';

@Injectable({
  providedIn: 'root'
})
export class MaintainanceService {

  constructor(private http: HttpClient) {}

  getAllMaintainanceList(): MaintainModel[]{
    return sample_monitor_data
  }

  fetchMaintainanceList(){
    return this.http.get<MaintainModel[]>('http://localhost:5000/bureau/maintainance/fetchall')
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  fetchMaintainanceListFleet(){
    return this.http.get<MaintainanceFleetModel[]>('http://localhost:5000/bureau/maintainance/fetchallFleet')
  }

  fetchOneMaintainanceFleet(fleet: string){
    return this.http.get<MaintainanceFleetModel>(`http://localhost:5000/bureau/maintainance/fetchoneFleet/${fleet}`)
  }

  fetchAllScheduledFleet(){
    return this.http.get<MaintainanceFleetModel[]>(`http://localhost:5000/bureau/maintainance/fetchAll-scheduledFleet`)
  }

  fetchOneScheduledFleet(fleet: string){
    return this.http.get<MaintainanceFleetModel>(`http://localhost:5000/bureau/maintainance/fetchone-scheduledFleet/${fleet}`)
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  fetchOneMaintainance(fleet: string){
    return this.http.get<MaintainanceModel>(`http://localhost:5000/bureau/maintainance/fetchone/${fleet}`)
  }

  addFleetToMaintainance(form: object){
    this.http.post('http://localhost:5000/bureau/monitoring/post', form).subscribe(() => {
      console.log('New Fleet for Maintainance...');
    });
  }

  removeFleetFromMaintainance(fleet: string){
    this.http.delete(`http://localhost:5000/bureau/maintainance/delete/${fleet}`).subscribe(() => {
      console.log(`Fleet with id ${fleet}} has finished maintainance...`);
    });
  }
}
