import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiarySingleParaModel } from '../../../models/diary/diary-Para.model';
import { DiaryListModel } from '../../../models/diary/diary-index.model';
import { StudentDiaryService } from './student-diary.service';

@Component({
  selector: 'app-student-diary',
  templateUrl: './student-diary.component.html',
  styleUrls: ['./student-diary.component.scss']
})
export class StudentDiaryComponent implements OnInit {

  diaryteacherForm: FormGroup;
  userId: string;
  subjectId: number;
  diaryPara: DiarySingleParaModel = new DiarySingleParaModel();
  diaryList: Array<DiaryListModel> = new Array<DiaryListModel>();
  diaryListShow: Array<DiaryListModel> = new Array<DiaryListModel>();
  dateWardlist: Array<string> = new Array<string>();

  constructor(
    private studentDiaryService: StudentDiaryService,
    private sessionService: SessionService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.diaryteacherForm = formBuilder.group({
      date: [""]
    })
  }


  ngOnInit() {
    this.diaryPara.studentId = this.sessionService.getItemFromStorage("userId")
    this.getlistdiary();
  }
  getlistdiary() {
    this.studentDiaryService.getdiarylist(this.diaryPara).subscribe(
      response => {
        this.diaryList = response
        this.diaryListShow = this.diaryList
        this.groupByDate(response)
      }, error => {
      }
    );
  }

  groupByDate(data: Array<DiaryListModel>) {
    var groupSubject = new Array();
    data.forEach(function (a) {
      groupSubject[a.subjectName] = groupSubject[a.subjectName] || [];
    });
    this.dateWardlist = Object.keys(groupSubject)

  }

  onItemChange(para) {
    if (para == "- - -") {
      this.diaryListShow = this.diaryList
    } else {
      this.diaryListShow = this.diaryList.filter(w => w.subjectName == para)
    }
  }

  onclickSubject(para) {
    this.sessionService.setDiaryToStorage("diaryId", para)
    this.router.navigate(['/pages/student-diary-detail/']);
  }
}