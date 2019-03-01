import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { SubjectDetailModel } from '../../../models/subject/subject-detail.model';
import { SujectDetailParaModel } from '../../../models/subject/subject-para.model';
import { SubjcetDeleteStudent } from '../../../models/subject/subject-delete-student.model';

@Injectable()
export class TeacherSubjectDetailService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getSubjectdetail(Para: SujectDetailParaModel): Observable<SubjectDetailModel> {
        const url = environment.url + "api/Subject/SubjectDetail";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, Para, { headers });
        return this.sub;
    }

    deleteStudentSubject(Para: SubjcetDeleteStudent):Observable<boolean>{
        const url = environment.url + "api/Subject/SubjectDeteleStudent";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<boolean>(url, Para, { headers });
        return this.sub;
    }
}
