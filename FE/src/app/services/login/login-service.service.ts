import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import { Cookie } from 'ng2-cookies';
import { HeadersUtil } from 'app/page/util/headers-util';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getTilte() {
    return "Hello world"
  }

  // getData(search: any): Observable<any> {
  //   const headers: LoginServiceService = LoginServiceService.getHeaders();
  //   const params: RequestParam[] = ParamUtil.toRequestParams(search);
  //   const url = ApiUrlUtil.buildQueryString("https://dummyjson.com/users", params);
  //   return this.http.get<any>(url, { headers: headers });
  // }

  login(loginRequest: any): Observable<any> {
    // const params: RequestParam[] = ParamUtil.toRequestParams(search);
    return this.http.post<any>(environment.mainUrl + "/auth/login",loginRequest);
  }
}

