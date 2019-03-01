import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';
import { SubjectIndex } from '../../../models/subject/subject-index.model';

import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentSubjectService } from './student-subject.service';
import { SubjectStudentPara } from '../../../models/subject/subject-student-para.model';



@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.scss']
})
export class StudentSubjectComponent implements OnInit {

  userId: string;
  subjectlist: Array<SubjectIndex> = new Array<SubjectIndex>();
  subjectlistshow: Array<SubjectIndex> = new Array<SubjectIndex>();
  subjectPara: SubjectStudentPara = new SubjectStudentPara();
  teachertypelist: any = [];
  public mysubjectForm: FormGroup;

  constructor(
    private teacherSubjectService: StudentSubjectService,
    private sessionService: SessionService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.mysubjectForm = formBuilder.group({
      type: [""]
    })
  }



  ngOnInit() {
    this.userId = this.sessionService.getItemFromStorage("userId")
    this.subjectPara.studentId = this.userId
    this.getlistSubject()

    // this.subjectlistshow = this.subjectlist  
  }

  getlistSubject() {
    this.teacherSubjectService.getlistSubject(this.subjectPara).subscribe(
      response => {
        this.subjectlist = response;
        this.subjectlistshow = this.subjectlist
        this.groupByType(response)
      }, error => {
      }
    );
  }

  groupByType(data: Array<SubjectIndex>) {
    var groupTeacherType = new Array();
    data.forEach(function (a) {
      groupTeacherType[a.teacherType] = groupTeacherType[a.teacherType] || [];
    });
    this.teachertypelist = Object.keys(groupTeacherType)
  }

  onItemChange(para) {
    if (para == "- - -") {
      this.subjectlistshow = this.subjectlist
    } else {
      this.subjectlistshow = this.subjectlist.filter(w => w.teacherType == para)
    }
  }

  onclickSubject(item: number) {
    this.sessionService.setSubjectToStorage("subjectId", item)
    this.router.navigate(['/pages/student-diary-create/']);
  }
}
