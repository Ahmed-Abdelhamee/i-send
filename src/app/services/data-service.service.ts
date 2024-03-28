import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  databaseURL: any = "";

  constructor(private http: HttpClient, private database: Database) {
    this.databaseURL = database.app.options.databaseURL;
  }

  getdata(position: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.databaseURL}/${position}.json`)
  }

  // ---------------------------- create data ----------------------------
  create(data: any, position: string, key: string, typeOfAction: string) {
    if (typeOfAction == "add" && position != "" && position != " " && position) {
      return this.http.post(`${this.databaseURL}/${position}.json`, data)
    } else if (position != "" && position != " " && position && key != "" && key != " " && key) {
      return this.http.put(`${this.databaseURL}/${position}/${key}.json`, data)
    } else {
      return this.http.put(`${this.databaseURL}/error.json`, data)
    }
  }

  // ---------------------------- delete data ----------------------------
  delete(position: string, key: string) {
    if (position != "" && position != " " && position && key != "" && key != " " && key)
      return this.http.delete(`${this.databaseURL}/${position}/${key}.json`)
    else
      return this.http.delete(`${this.databaseURL}/error.json`)

  }
}
