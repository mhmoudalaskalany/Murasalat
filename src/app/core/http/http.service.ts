import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://217.139.116.43/Afaqy.Selldoor.API';
  // private baseUrl: 'http://212.70.49.100:8081/';

  constructor(private http: HttpClient) {}

  postReq(url: string, data: Object) {
    return this.http.post(this.baseUrl + url, data);
  }

  getReq(url: string, data?: Object) {
    return this.http.get(this.baseUrl + url, data);
  }

  getHeaderReq(url: string, data: string) {
    return this.http.get(this.baseUrl + url + '/' + data);
  }

}
