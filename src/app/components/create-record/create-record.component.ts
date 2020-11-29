import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FligthsService } from "../../services/flights.service";

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
  public completed: boolean=false;
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
    this.completed=true;
  }


  onSubmit(){
    console.log("Paso!")
    this._fligthsService.createRegisterFligth(this.register).subscribe(
      result => {
        console.log(result)
        if (result["ok"] == true) {
          alert("Se creo el registro correctamente")
          this.navigateUrl.navigateByUrl("/view").then(e => {
          })
        } else {
          alert("Ha ocurrido un problema, verifique los datos")
        }
      })
  }

  loadData(){
    this.register = {
        Cancelled: "1",
        CancellationCode: "NA",
        Diverted: "1",
        CarrierDelay: "NA",
        WeatherDelay: "NA",
        NASDelay: "NA",
        SecurityDelay: "NA",
        LateAircraftDelay: "NA",
        Year: "1988",
        Month: "10",
        DayofMonth: "13",
        DayOfWeek: "2",
        DepTime: "834",
        CRSDepTime: "830",
        ArrTime: "955",
        CRSArrTime: "937",
        UniqueCarrier: "PS",
        FlightNum: "1457",
        TailNum: "NA",
        ActualElapsedTime: "81",
        CRSElapsedTime: "67",
        AirTime: "NA",
        ArrDelay: "18",
        DepDelay: "4",
        Origin: "LAX",
        Dest: "SFO",
        Distance: "337",
        TaxiIn: "NA",
        TaxiOut: "NA"
    }
  }

}
