import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FligthsService } from "../../services/flights.service";

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
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
          if (result["ok"] == true) {
            this.getDataPetition(result["fligthData"][0]).then(result=>
              {
                console.log(result)
                this.register = result
                this.completed = true;
              })
            
            console.log(this.register)
          } else {
            this.completed = true;
          }
        })



    });

  }


  getDataPetition(dataPetition): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        delete dataPetition["_id"]
        resolve(dataPetition)
      } catch (error) {
        reject(dataPetition)
      }
    });
  }



  onSubmit() {
    this._fligthsService.updatePersona(this.register, this._id).subscribe(
      result => {
        console.log(result)
        if (result["ok"] == true) {
          alert("Se actualizo los datos correctamente")
          this.navigateUrl.navigateByUrl("/view").then(e => {
          })
        } else {
          alert("Ha ocurrido un problema al actualizar los datos")
        }
      })
  }

}
