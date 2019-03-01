import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../../../service/session.service';
import { StudentChangePasswordService } from './student-change-password.service';
import { StudentPasswordModel, TeacherPasswordModel } from '../../../models/user/user-change-password.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.scss']
})
export class StudentChangePasswordComponent implements OnInit {
  changePassword: FormGroup;
  name: string;
  id: string;
  passwordOld: string;
  passwordNew: string;
  confirmPassword: string;
  student: StudentPasswordModel = new StudentPasswordModel();
  constructor(
    private studentChangePasswordService: StudentChangePasswordService,
    private sessionService: SessionService,
    private formBuilder: FormBuilder
  ) {
    this.changePassword = formBuilder.group({
      name: ["", [Validators.required, Validators.nullValidator]],
      passwordOld: ["", [Validators.required, Validators.nullValidator]],
      passwordNew: ["", [Validators.required, Validators.nullValidator]],
      id: ["", [Validators.required, Validators.nullValidator]],
      confirmPassword: ["", [Validators.required, Validators.nullValidator]]
    });
  }


  ngOnInit() {
    this.student.studentId = this.sessionService.getItemFromStorage("userId");
    this.name = this.sessionService.getItemFromStorage("name");
    this.student.passwordNew = ""
    this.student.passwordOld = ""
    this.confirmPassword = ""
  }

  change() {
    let check1 = false;
    let check2 = false;
    let check3 = false;
    if (this.student.passwordOld == undefined || this.student.passwordOld.trim() == "") {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณากรอกรหัสผ่านปัจจุบัน',
        showConfirmButton: false,
        timer: 2000
      })
    }
    else if (this.student.passwordNew == undefined || this.student.passwordNew.trim() == "") {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณากรอกรหัสใหม่',
        showConfirmButton: false,
        timer: 2000
      })
    }
    else if (this.confirmPassword == undefined || this.confirmPassword.trim() == "") {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณากรอกยืนยันรหัสผ่าน',
        showConfirmButton: false,
        timer: 2000
      })
    } 
     if (this.student.passwordOld.trim().length != 0) {
      check1 = true
    }
    if (this.student.passwordNew.trim().length > 0) {
      check2 = true
    }
    if (this.confirmPassword.trim().length > 0) {
      check3 = true
    }
    if(check1 == true && check2 == true && check3 == true){
    if (this.student.passwordNew == this.confirmPassword) {
     this.studentChangePasswordService.changePassword(this.student)
     .subscribe(
      response => {
        if (response == true) {
          swal({
            position: 'center',
            type: 'success',
            title: 'เปลี่ยนรหัสผ่านเรียบร้อย',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            location.reload();        
          })
        }
        else {
          swal({
            position: 'center',
            type: 'error',
            title: 'รหัสผ่านปัจจุบันผิด',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }, error => {
      }
    );
    } 
    else 
    {
      swal({
        position: 'center',
        type: 'warning',
        title: 'รหัสผ่านใหม่และยืนยันรหัสผ่านไม่ตรงกัน',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
  }
}
