import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import swal from 'sweetalert2';
import { userModel } from '../../../models/user/user.model';
import { SessionService } from '../../../service/session.service';
import { SubjectDetailModel, TeacherAssistantModel } from '../../../models/subject/subject-detail.model';
import { Router } from '@angular/router';
import { SubjectCreateModel } from '../../../models/subject/subjcet-create.model';
import { TeacherCreateSubjectService } from './teacher-create-subject.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-teacher-create-subject',
  templateUrl: './teacher-create-subject.component.html',
  styleUrls: ['./teacher-create-subject.component.scss']
})
export class TeacherCreateSubjectComponent implements OnInit {

  subjectData: SubjectCreateModel = new SubjectCreateModel();
  SubjectDetailModel: SubjectDetailModel = new SubjectDetailModel();
  teacherAssistantdata: TeacherAssistantModel = new TeacherAssistantModel();
  listTeacher: Array<userModel> = new Array<userModel>();
  public subjectForm: FormGroup;
  userId: string;
  name: string;
  typeId: string;
  textValue: string
  check_Type: number;
  constructor(
    private formBuilder: FormBuilder,
    private teacherCreateSubjectService: TeacherCreateSubjectService,
    private sessionService: SessionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.check_Type = this.sessionService.getItemFromStorage("typeId")
    if (this.check_Type != 202) {
      this.sessionService.clearSession();
      this.router.navigate(['/login']);
    }
    this.subjectForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
      subjectName: [""]
    });

    this.userId = this.sessionService.getItemFromStorage("userId")
    this.name = this.sessionService.getItemFromStorage("name")
    this.typeId = this.sessionService.getItemFromStorage("typeId")
    this.getAllTeacher();
  }


  createSubject(): void {
    if (this.items.value[0].teacherId.length != 0) {
      this.subjectData.teacherAssistants = this.items.value;
    }

    if (this.subjectData.subjectName == undefined) {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณากรอกชื่อวิชา',
      })
    } else {
      this.subjectData.teacherId = this.userId;
      this.teacherCreateSubjectService.createSubject(this.subjectData).subscribe(
        response => {
          this.SubjectDetailModel = response;
          if (this.SubjectDetailModel.subjectId != 0) {
            swal({
              position: 'center',
              type: 'success',
              title: 'สร้างวิชาเรียนเรียบร้อย',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
             location.reload();
            })
          } else {
            swal({
              position: 'center',
              type: 'warning',
              title: 'สร้างวิชาไม่สำเร็จ เนื่องจากมีผู้สอนซ้ำ',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
            //  location.reload();
            })
          }
        }, error => {
        }
      );
    }
  }

  getAllTeacher(): void {
    this.teacherCreateSubjectService.getlistTeacher()
      .subscribe(
        response => {
          this.listTeacher = response;
        }, error => {
        }
      );
  }
 

  createItem(): FormGroup {
    return this.formBuilder.group({
      teacherId: '',
    });
  }

  get items(): FormArray {
    return this.subjectForm.get('items') as FormArray;
  };

  addItem(): void {
    if (this.items.length == 4) {
      swal({
        position: 'center',
        type: 'warning',
        title: 'มีอาจารย์ผู้ช่วยได้สูงสุด 4 คน',
        showConfirmButton: true,
      })
    } else {
      this.items.push(this.createItem());
    }
  }

  deleteItem(id: number): void {
    this.items.removeAt(id);
  }
}
