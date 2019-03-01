import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MultipleInsertModel } from '../../../models/admin/insert.model';
import { ContentType } from '@angular/http/src/enums';

@Injectable()
export class MultipleInsertService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    sub: any;

    UploadExcel(file:File): Observable<any> {
      const url = environment.url + "api/Upload/Excel";
      const formData = new FormData();
     
      formData.append('file', file );   
    
      this.sub = this.http.post<any>(url, formData );   
    return this.sub;
    }

    multipleInsert(multipleData:MultipleInsertModel): Observable<boolean>{
      const url = environment.url +"/api/User/MultipleInsert";
      const headers = new HttpHeaders({
          "Content-Type": "text/json"
      });    
      this.sub = this.http.post<any>(url, multipleData, { headers });
      
      return this.sub;
      }
   

}
