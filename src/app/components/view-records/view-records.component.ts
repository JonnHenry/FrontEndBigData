import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FligthsService } from "../../services/flights.service";

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.css']
})
export class ViewRecordsComponent implements OnInit {
  private pageIndexData: number = 0;
  public data: Array<any>;
  private lastIndexData: number = 1;
  public completed: boolean = false;

  constructor(private _fligthsService: FligthsService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  first() {
    this.pageIndexData = 0;
    this.completed = false;
    this.getData();
  }

  last() {
    this.pageIndexData = this.lastIndexData;
    this.completed = false;
    this.getData()
  }

  next() {
    this.pageIndexData += 1;
    this.completed = false;
    if (this.pageIndexData > this.lastIndexData) {
      this.pageIndexData = this.lastIndexData;
    }
    this.getData();
  }


  previous() {
    this.pageIndexData -= 1;
    this.completed = false;
    if (this.pageIndexData < 1) {
      this.pageIndexData = 1;
    }
    this.getData();
  }


  async getData() {
    try {
      await this._fligthsService.getRegistresFligth(this.pageIndexData).subscribe(
        result => {
          if (result.ok == true) {
            this.data = result.airoportData;
            this.lastIndexData = result.numpages - 1;
            this.completed = true;
          } else {
            this.data = [];
          }
        });
    } catch (error) {
      console.log(<any>error)
    }

  }

  deleteRegister(id: string) {
    this._fligthsService.deleteRegisterFligth(id).subscribe(result => {
      if (result.ok == true) {
        alert("El registro se ha eliminado de forma correcta");
        this.getData();
      } else {
        alert("El registro no se ha eliminar")
      }
    })
  }




}
