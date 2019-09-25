import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:3300/";
  constructor(private http: HttpClient) { }

  getData(endPoint:string){
    return this.http.get(this.baseUrl+endPoint);
  }

}
