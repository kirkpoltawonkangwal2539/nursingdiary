import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiaryListParaModel } from '../../../models/diary/diary-Para.model';
import { DiaryListModel } from '../../../models/diary/diary-index.model';
import { TeacherDiaryService } from './teacher-diary.service';

@Component({
  selector: 'app-teacher-diary',
  templateUrl: './teacher-diary.component.html',
  styleUrls: ['./teacher-diary.component.scss']
})
export class TeacherDiaryComponent implements OnInit {

  diaryteacherForm: FormGroup;
  userId: string;
  subjectId :number ;
  diaryPara :DiaryListParaModel = new DiaryListParaModel();
  diaryList :Array<DiaryListModel> = new Array<DiaryListModel>();
  diaryListShow :Array<DiaryListModel> = new Array<DiaryListModel>();
  dateWardlist: Array<string> = new  Array<string>();
  
    constructor(
      private teacherDiaryService: TeacherDiaryService,
      private sessionService: SessionService,
      private router: Router,
      private formBuilder: FormBuilder) {
        this.diaryteacherForm = formBuilder.group({
          date: [""]             
        }) }
  
       
    ngOnInit() {
    this.diaryPara.teacherId = this.sessionService.getItemFromStorage("userId")
    this.diaryPara.subjectId = this.sessionService.getItemFromStorage("subjectId")
    this.getlistdiary();
    }
    getlistdiary(){
      this.teacherDiaryService.getdiarylist(this.diaryPara).subscribe(
        response => {
          this.diaryList = response
          this.diaryListShow = this.diaryList
          this.groupByDate(response)
        }, error => {
        }
      );
    }
  
    groupByDate(data : Array<DiaryListModel>){
      var groupDate = new Array();  
      data.forEach(function (a) {
        groupDate [a.dateWard] = groupDate [a.dateWard] || [];    
    });
    this.dateWardlist = Object.keys(groupDate)
    }
  
    onItemChange(para){
      if(para == "- - -"){
        this.diaryListShow = this.diaryList
      }else{
        this.diaryListShow = this.diaryList.filter( w => w.dateWard == para)
      }   
    }
    
    onclickSubject(para){
      this.sessionService.setDiaryToStorage("diaryId", para)
      this.router.navigate(['/pages/teacher-diary-detail/']);
    }
  }
