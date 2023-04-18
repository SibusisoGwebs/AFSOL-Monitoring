import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistMaintainance } from '../shared/maintain.model';
import { HIST_MAINTAINANCE_FLEET_TECH} from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class HistoryMaintainainceService {

  constructor(private http: HttpClient) { }

  fetchAll(){
    return this.http.get<HistMaintainance[]>('http://localhost:5000/bureau/maintainanceHistory/fetchallFleet');
  }

  fetchAFleet(searchTerm: string){
    return this.http.get<HistMaintainance[]>(`http://localhost:5000/bureau/maintainanceHistory/fetchoneFleet/${searchTerm}`)
  }

  fetchAllIncludeTech(){
    return this.http.get<HistMaintainance[]>(HIST_MAINTAINANCE_FLEET_TECH);
  }
}
