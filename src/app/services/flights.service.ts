import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FligthsService {
  private endpoint: string;

  constructor(private _http: HttpClient) {
    this.endpoint = "http://localhost:3000/";
  }
  getRegistresFligth(page: number): Observable<any>{
    return this._http.get(this.endpoint+'airoport/all/'+page);
  }


  getRegisterFligth(id:string){
    return this._http.get(this.endpoint+'airoport/data/'+id);
  }


  createRegisterFligth(flight): Observable<any>{
    let requestBody=JSON.stringify(flight);
    let headers=new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this._http.post(this.endpoint+'airoport/create',requestBody,{headers: headers});
  }

  deleteRegisterFligth(id): Observable<any>{
    let headers=new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this._http.delete(this.endpoint+'airoport/delete/'+id,{headers: headers});
  }

  updatePersona(update,id:string): Observable<any>{
    let requestBody=JSON.stringify(update);
    let headers=new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this._http.put(this.endpoint+'airoport/update/'+id,requestBody,{headers: headers});
}












}
