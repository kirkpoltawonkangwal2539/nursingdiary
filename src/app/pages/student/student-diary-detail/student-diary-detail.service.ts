import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DiaryDetailParaModel } from '../../../models/diary/diary-Para.model';
import { DiaryDetailModel } from '../../../models/diary/diary-detail.model';
import { UploadPhotoModel } from '../../../models/diary/diary-create.model';

@Injectable()
export class StudentDiaryDetailService {
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

    SuccessDiary(commentPara: DiaryDetailParaModel): Observable<any> {
        const url = environment.url + "api/Diary/SuccessDiary";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, commentPara, { headers });
        return this.sub;
    }

    UpdateDiary(Model: DiaryDetailModel): Observable<any>{
        const url = environment.url + "api/Diary/UpdateDiary";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, Model, { headers });
        return this.sub;
    }

    uploadImage(image: File): Observable<UploadPhotoModel> {
        const url = environment.url + "api/Upload/Upload";
        const formData = new FormData();
      
        formData.append('image', image ); 
      
      this.sub = this.http.post<any>(url, formData);
      return this.sub;
      
    }  
}
