import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';
import { SubjectIndex } from '../../../models/subject/subject-index.model';
import { SubjectTeacherPara } from '../../../models/subject/subject-teacher-para.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeacherSubjectService } from './teacher-subject.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.scss']
})
export class TeacherSubjectComponent implements OnInit {

  userId: string;
  subjectlist: Array<SubjectIndex> = new Array<SubjectIndex>();
  subjectlistshow: Array<SubjectIndex> = new Array<SubjectIndex>();
  subjectPara: SubjectTeacherPara = new SubjectTeacherPara();
  teachertypelist: any = [];
  public mysubjectForm: FormGroup;

  constructor(
    private teacherSubjectService: TeacherSubjectService,
    private sessionService: SessionService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.mysubjectForm = formBuilder.group({
      type: [""]
    })
  }



  ngOnInit() {
    this.userId = this.sessionService.getItemFromStorage("userId")
    this.subjectPara.teacherId = this.userId
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
    this.router.navigate(['/pages/teacher-diary/']);
  }

  onclickOption(item: number){   
    this.sessionService.setSubjectToStorage("subjectId", item)
    this.router.navigate(['/pages/teacher-subject-detail/']);
  }
}

