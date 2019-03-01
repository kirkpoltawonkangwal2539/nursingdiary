import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { TeacherSubjectDetailService } from './teacher-subject-detail.service';
import { Router } from '@angular/router';
import { SubjectDetailModel, TeacherAssistantModel, StudenSubjectDetailModel } from '../../../models/subject/subject-detail.model';
import { SujectDetailParaModel } from '../../../models/subject/subject-para.model';
import { CompileMetadataResolver } from '@angular/compiler';
import { SubjcetDeleteStudent } from '../../../models/subject/subject-delete-student.model';
import swal from 'sweetalert2';



@Component({
  selector: 'app-teacher-subject-detail',
  templateUrl: './teacher-subject-detail.component.html',
  styleUrls: ['./teacher-subject-detail.component.scss']
})
export class TeacherSubjectDetailComponent implements OnInit {

  constructor(
    private teacherSubjectDetailService: TeacherSubjectDetailService,
    private sessionService: SessionService,
    private router: Router,
  ) { }
  subjectPara: SujectDetailParaModel = new SujectDetailParaModel();
  subjectDetailModel: SubjectDetailModel = new SubjectDetailModel();
  teacherAssistantlist: Array<TeacherAssistantModel> = new Array<TeacherAssistantModel>();
  studenlist: Array<StudenSubjectDetailModel> = new Array<StudenSubjectDetailModel>();
  deleteStudentPara:SubjcetDeleteStudent = new SubjcetDeleteStudent();
  check:boolean;
  ngOnInit() {
    this.subjectPara.subjectId = this.sessionService.getItemFromStorage("subjectId")
    this.getSubjectDetail()


  }

  getSubjectDetail() {
    this.teacherSubjectDetailService.getSubjectdetail(this.subjectPara).subscribe(
      response => {
        this.subjectDetailModel = response;
        this.teacherAssistantlist = this.subjectDetailModel.assistantSelector
        this.studenlist = this.subjectDetailModel.studenSubjectDetail
        console.log(this.subjectDetailModel)
      }, error => {
      }
    );
  }

  DeleteStudentInSubject(studentId: string, teacherId: string) {
    this.deleteStudentPara.studentId = studentId ;
    this.deleteStudentPara.teacherId = teacherId ;
    this.deleteStudentPara.subjectId = this.subjectDetailModel.subjectId;
    swal({
      title: 'ต้องการลบออกจากวิชานี้',
      text: this.studenlist.find(x => x.studentId == studentId).studentFirstName + " " + this.studenlist.find(x => x.studentId == studentId).studentLastName,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.value == true) {
        this.teacherSubjectDetailService.deleteStudentSubject(this.deleteStudentPara)
          .subscribe(
            response => {
              this.check = response;
              console.log(response)
            if(response == true){
              swal({
                position: 'center',
                type: 'success',
                title: 'ถูกลบเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                location.reload();;
              })
            }else{
              swal({
                position: 'center',
                type: 'error',
                title: 'ไม่สามารถลบได้',
                showConfirmButton: false,
                timer: 1500
              })
            }
            })
      }
      else {
        console.log("ผิดพลาด")
      }
    })

    console.log(studentId)
    console.log(teacherId)
  }
  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }
}

