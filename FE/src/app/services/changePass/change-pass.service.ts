import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {

  constructor(
    private http: HttpClient
  ) { }

  changepass(username: string, email: string): Observable<any>{
    const url = environment.mainUrl + "/auth"
    return this.http.get<any>(url+"/changePass?username=" + username + '&email='+email);
  }

  savePass(data: any): Observable<any>{
    const url = environment.mainUrl + "/auth"
    return this.http.put<any>(url+"/savePass", data);
  }
}
