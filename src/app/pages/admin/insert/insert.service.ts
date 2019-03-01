import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { InsertModel } from '../../../models/admin/insert.model';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
;

@Injectable()
export class InsertService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    
    insertTeacher(insertData:InsertModel): Observable<any>{
    const url = environment.url +"api/Teacher/InsertTeacher";
    const headers = new HttpHeaders({
        "Content-Type": "text/json"
    });    
    this.sub = this.http.post<any>(url, insertData, { headers });
    
    return this.sub;
    }
    
    insertStudent(insertData:InsertModel): Observable<any>{
        const url = environment.url +"/api/Student/InsertStudent";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });    
        this.sub = this.http.post<any>(url, insertData, { headers });
        
        return this.sub;
    }
}
