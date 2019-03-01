import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { userModel } from '../../../models/user/user.model';



@Injectable()
export class ListTeacherService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getlistTeacher(): Observable<Array<userModel>> {
        const url = environment.url + "api/Teacher/GetAllTeacher";       
        this.sub = this.http.get<Array<userModel>>(url);
        return this.sub;
    }

    deleteTeacher(id: string):Observable<boolean>{
        const url = environment.url + "api/Teacher/DeleteTeacher";
        const params = new HttpParams()
        .set("id",id)   
        this.sub = this.http.delete<boolean>(url, { params });
        return this.sub; 
    }

    resetPassword(id: string):Observable<boolean>{
        const url = environment.url + "api/Teacher/ResetPasswordTeacher";
        const params = new HttpParams()
        .set("teacherId",id)   
        this.sub = this.http.delete<boolean>(url, { params });
        return this.sub; 
    }
}
