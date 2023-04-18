import { Injectable } from '@angular/core';
import { Fleet } from '../shared/fleet.model';
import { sample_data } from '../shared/data.sample';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FleetServicesService {

  constructor(private http: HttpClient) { }

  getAllFleet(): Fleet[]{
    return sample_data;
  }

  getFleetBySearchTerm(searchTerm: string){
    return this.getAllFleet().filter(fleet => fleet.fleetNumber.includes(searchTerm));
  }

  getFleetById(fleetNumber: string){
    return this.getAllFleet().find(fleet => fleet.fleetNumber == fleetNumber) ?? new Fleet();
  }

  addFleet(form: object){
    this.http.post('http://localhost:5000/bureau/fleet/post', form).subscribe(() => {
      console.log('Fleet was Added...');
    })
  }

  fetchAllFleet(){
    return this.http.get<Fleet[]>('http://localhost:5000/bureau/fleet/fetchall');
  }

  fetchOneFleet(fleetNumber: string){
    return this.http.get<Fleet>(`http://localhost:5000/bureau/fleet/fetchone/${fleetNumber}`)
  }

  removeFleet(fleetNUmber: string){
    this.http.delete(`http://localhost:5000/bureau/maintainance/delete/${fleetNUmber}}`).subscribe(() => {
      console.log(`Fleet ${fleetNUmber}} was deleted...`);
    });
  }
}
