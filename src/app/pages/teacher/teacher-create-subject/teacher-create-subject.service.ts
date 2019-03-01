import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { userModel } from '../../../models/user/user.model';
import { SubjectDetailModel } from '../../../models/subject/subject-detail.model';
import { SubjectCreateModel } from '../../../models/subject/subjcet-create.model';

@Injectable()
export class TeacherCreateSubjectService {

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

    createSubject(subjectData:SubjectCreateModel): Observable<SubjectDetailModel>{
        const url = environment.url + "/api/Subject/CreateSubject";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });    
        this.sub = this.http.post<any>(url, subjectData, { headers });
        
        return this.sub;
    }
}
