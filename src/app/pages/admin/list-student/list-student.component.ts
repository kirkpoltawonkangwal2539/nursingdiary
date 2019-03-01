import { Component, OnInit } from '@angular/core';

import { ListStudentService } from './list-student.service';
import swal from 'sweetalert2';
import { delay } from 'q';
import { Router, Routes } from '@angular/router';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { userModel } from '../../../models/user/user.model';
import { SessionService } from '../../../service/session.service';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  liststudent: Array<userModel> = new Array<userModel>();
  check_Type: number ;
  
  constructor(
    private listStudentService: ListStudentService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.check_Type = this.sessionService.getItemFromStorage("typeId")
    if(this.check_Type != 101){
      this.sessionService.clearSession();
      this.router.navigate(['/login']);
  }
    this.getAllStudent();
  }

  getAllStudent(): void {
    this.listStudentService.getlistStudent()
      .subscribe(
        response => {
          this.liststudent = response;
        }, error => {
        }
      );
  }

  DeleteStudent(id: string) {
    swal({
      title: 'ต้องการลบ',
      text: this.liststudent.find(x => x.userId == id).firstname + " " + this.liststudent.find(x => x.userId == id).lastname,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.value == true) {
        this.listStudentService.deleteStudent(id)
          .subscribe(
            response => {
              swal({
                position: 'center',
                type: 'success',
                title: 'ถูกลบเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                this.getAllStudent();
              })
            })
      }
      else {
        console.log("ผิดพลาด")
      }
    })
  }

  EditStudent(userId: string , typeId: number){
    this.sessionService.setEditUserStorage("edit-userId",userId);
    this.sessionService.setEditTypeStorage("edit-typeId",typeId);
    this.router.navigate(['/pages/edit-data/']);
  }

  ResetPassword(userId: string){
    console.log(userId)
    swal({
      title: 'ต้องการรีเซ็ตรหัสผ่าน',
      text: this.liststudent.find(x => x.userId == userId).firstname + " " + this.liststudent.find(x => x.userId == userId).lastname,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.value == true) {
        this.listStudentService.resetPassword(userId)
          .subscribe(
            response => {
              swal({
                position: 'center',
                type: 'success',
                title: 'รหัสผ่านถูกรีเซ็ตเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                this.getAllStudent();
              })
            })
      }
      else {
        console.log("ผิดพลาด")
      }
    })
  }
}
