import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherPasswordModel } from '../../../models/user/user-change-password.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class TeacherChangePasswordService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    changePassword(data:TeacherPasswordModel): Observable<any>{
        const url = environment.url +"api/Teacher/ChangePasswordTeacher";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });    
        this.sub = this.http.post<any>(url, data, { headers });
        
        return this.sub;
        }
}
