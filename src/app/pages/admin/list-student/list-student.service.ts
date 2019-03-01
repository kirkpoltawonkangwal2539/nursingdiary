import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { userModel } from '../../../models/user/user.model';


@Injectable()
export class ListStudentService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getlistStudent(): Observable<Array<userModel>> {
        const url = environment.url + "api/Student/GetAlltStudent";       
        this.sub = this.http.get<Array<userModel>>(url);
        return this.sub;
    }

    deleteStudent(id: string):Observable<boolean>{
        const url = environment.url + "api/Student/DeleteStudent";
        const params = new HttpParams()
        .set("id",id)   
        this.sub = this.http.delete<boolean>(url, { params });
        return this.sub; 
    }

    resetPassword(id: string):Observable<boolean>{
        const url = environment.url + "api/Student/ResetPasswordStudent";
        const params = new HttpParams()
        .set("studentId",id)   
        this.sub = this.http.delete<boolean>(url, { params });
        return this.sub; 
    }

}
