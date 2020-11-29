import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FligthsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-view-single-record',
  templateUrl: './view-single-record.component.html',
  styleUrls: ['./view-single-record.component.css']
})
export class ViewSingleRecordComponent implements OnInit {

  private _id: string;
  public completed: boolean;
  public register = {
    AirTime: "",
    ActualElapsedTime: "",
    ArrDelay: "",
    ArrTime: "",
    CRSArrTime: "",
    CRSDepTime: "",
    CRSElapsedTime: "",
    CancellationCode: "",
    Cancelled: "",
    CarrierDelay: "",
    DayOfWeek: "",
    DayofMonth: "",
    DepDelay: "",
    DepTime: "",
    Dest: "",
    Distance: "",
    Diverted: "",
    FlightNum: "",
    LateAircraftDelay: "",
    Month: "",
    NASDelay: "",
    Origin: "",
    SecurityDelay: "",
    TailNum: "",
    TaxiIn: "",
    TaxiOut: "",
    UniqueCarrier: "",
    WeatherDelay: "",
    Year: ""
  }

  constructor(private navigateUrl: Router, private route: ActivatedRoute, private _fligthsService: FligthsService) { }

  ngOnInit(): void {

    this.completed = false;
    this.route.paramMap.subscribe(params => {
      this._id = params.get('fligthId')
     
      this._fligthsService.getRegisterFligth(this._id).subscribe(
        result => {
          this.register = result["fligthData"][0];
          this.completed = true;
        })
    });

  }

  onSubmit() {
    
  }

}
