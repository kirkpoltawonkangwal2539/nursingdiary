import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { DiaryListModel } from '../../../models/diary/diary-index.model';
import { DiarySingleParaModel } from '../../../models/diary/diary-Para.model';

@Injectable()
export class StudentDiaryService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getdiarylist(para: DiarySingleParaModel): Observable<Array<DiaryListModel>> {
        const url = environment.url + "/api/Diary/DiaryList";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<boolean>(url, para, { headers });
        return this.sub;
    }
}