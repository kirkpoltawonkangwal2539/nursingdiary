
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DiaryCreateModel, UploadPhotoModel } from '../../../models/diary/diary-create.model';
import { SujectDetailParaModel } from '../../../models/subject/subject-para.model';


@Injectable()
export class StudentDiaryCreateService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    recordDiary(diarydata: DiaryCreateModel): Observable<any> {
        const url = environment.url + "api/Diary/RecordDiary";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, diarydata, { headers });

        return this.sub;
    }

    getSubjectDetail(diaryDetailParaa : SujectDetailParaModel): Observable<any> {
        const url = environment.url + "api/Subject/SubjectDetail";
        const headers = new HttpHeaders({
            "Content-Type": "text/json"
        });
        this.sub = this.http.post<any>(url, diaryDetailParaa, { headers });

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
