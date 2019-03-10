import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { APIURL } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService) {}

  userLogin(userLoginData) {
    return this.http.postReq('url', userLoginData);
  }

  changePassword(userDataWithNewPassword) {
    return this.http.postReq('url', userDataWithNewPassword);
  }

  getUserData(userId) {
    return this.http.getHeaderReq('url', userId);
  }
}
