import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) { }

  createUser(data: any): Observable<any> {
    return this.http.post(environment.mainUrl+"/auth/createAccount", data);
  }
}
