import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DiaryDetailParaModel } from '../../../models/diary/diary-Para.model';
import { CommentModel } from '../../../models/diary/diary-comment.model';

@Injectable()
export class TeacherDiaryDetailService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    getDiaryDetail(diaryDetailPara: DiaryDetailParaModel): Observable<any> {
        const url = environment.url + "api/Diary/DiaryDetail";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, diaryDetailPara, { headers });
        return this.sub;
    }

    getCommentDetail(commentPara: DiaryDetailParaModel): Observable<any> {
        const url = environment.url + "api/Comment/CommentDetail";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, commentPara, { headers });
        return this.sub;
    }

    createComment(createComment: CommentModel): Observable<any> {
        const url = environment.url + "api/Comment/CreateComment";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, createComment, { headers });
        return this.sub;
    }
}
