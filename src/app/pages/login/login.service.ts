import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { userModel } from '../../models/user/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    LogIn(username: string , password: string): Observable<userModel>{
    const url = environment.url + "api/User/Login";
    let dataObj = {
        userid: username,
        password: password,
        firistname: '',
        lastname: '',
        typeId : 0,
        GrantType: 'password'
    }
    let headers = new HttpHeaders({ 'Content-Type': 'text/json' });

    this.sub = this.http.post<userModel>(url, dataObj , { headers }); 
    return this.sub;
    }

}
