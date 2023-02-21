import { Component, OnInit } from '@angular/core';
import { TaxPayersDataService } from './service/data/tax-payers-data.service';


export class TaxPayersDetails {
  constructor(
    public propertyId : String,
    public ownersName : String,
    public areaInSqFt : number,
    public propertyType : String,
    public taxAmount : number,
    public dateOfPyt : Date,
    public dueDate : Date,
    public revisedTaxAmt : number
  ) { }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
  
  taxPayersDetails : TaxPayersDetails[];

  title = 'propertyTaxationSystem';
  message : string;
  taxlistflag : boolean;

  constructor(
    private service:TaxPayersDataService
  ) {}


  ngOnInit(): void {
    this.taxlistflag = false;    
  }


  clearrecord() {    
    this.service.executeDataCleanUp().subscribe(
      //response => console.log(response)
    );
    console.log(this.title);
  }

  
  addrecord() {    
    this.service.executeaddrecords().subscribe(
      //response => console.log(response)
    );
    console.log(this.title);
  }


  showrecord() {    
    this.service.executefetchrecords().subscribe(
      response => {
        console.log(response)
        this.taxPayersDetails = response;
        
      }
    );
    this.taxlistflag = true;
    console.log(this.title);
  }

}
