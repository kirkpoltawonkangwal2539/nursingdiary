import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { userModel } from '../../../models/user/user.model';


@Injectable()
export class EditDataService {


    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getStudent(UserId: string): Observable<userModel> {
        const url = environment.url + "api/Student/GetStudentDetail";
        const params = new HttpParams()
            .set("id", UserId)
        this.sub = this.http.get<userModel>(url, { params });
        return this.sub;
    }

    getTeacher(UserId: string): Observable<userModel> {
        const url = environment.url + "api/Teacher/GetTeacherDetail";
        const params = new HttpParams()
            .set("id", UserId)
        this.sub = this.http.get<userModel>(url, { params });
        return this.sub;
    }

    editStudent(userdata: userModel): Observable<boolean> {
        const url = environment.url +"api/Student/EditStudent";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });    
        this.sub = this.http.post<boolean>(url, userdata, { headers });
        return this.sub;
    }

    editTeacher(userdata: userModel): Observable<boolean> {
        const url = environment.url +"api/Teacher/EditTeacher";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });    
        this.sub = this.http.post<boolean>(url, userdata, { headers });
        return this.sub;
    }
}
