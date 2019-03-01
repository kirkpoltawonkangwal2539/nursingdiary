import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { SubjectIndex } from '../../../models/subject/subject-index.model';
import { SubjectTeacherPara } from '../../../models/subject/subject-teacher-para.model';

@Injectable()
export class TeacherSubjectService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getlistSubject(Para: SubjectTeacherPara): Observable<Array<SubjectIndex>> {
        const url = environment.url + "/api/Subject/SubjectTeacherList";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, Para, { headers });
        return this.sub;
    }
}
