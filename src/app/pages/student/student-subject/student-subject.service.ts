import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SubjectIndex } from '../../../models/subject/subject-index.model';
import { SubjectStudentPara } from '../../../models/subject/subject-student-para.model';

@Injectable()
export class StudentSubjectService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getlistSubject(Para: SubjectStudentPara): Observable<Array<SubjectIndex>> {
        const url = environment.url + "api/Subject/SubjectStudentList";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, Para, { headers });
        return this.sub;
    }
}
