import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaxPayersDetails } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})

export class TaxPayersDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeDataCleanUp() {
    console.log("delete DB")
    return this.http.delete('http://localhost:8080/api/propertytax/clearall');
    
  }

  executeaddrecords() {
    console.log("Add Records to DB")
    return this.http.post('http://localhost:8080/api/propertytax/addrecords', null);
    
  }

  executefetchrecords() {
    console.log("pull Records from DB")
    return this.http.get<TaxPayersDetails[]>('http://localhost:8080/api/propertytax/taxpayers');

  }

}
