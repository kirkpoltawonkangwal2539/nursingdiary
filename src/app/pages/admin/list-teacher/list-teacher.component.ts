import { Component, OnInit } from '@angular/core';

import { ListTeacherService } from './list-teacher.service';
import swal from 'sweetalert2';
import { userModel } from '../../../models/user/user.model';
import { Router } from '@angular/router';
import { SessionService } from '../../../service/session.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent implements OnInit {

  listTeacher: Array<userModel> = new Array<userModel>();
  check_Type: number ;
  constructor(
    private listTeacherService: ListTeacherService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.check_Type = this.sessionService.getItemFromStorage("typeId")
    if(this.check_Type != 101){
      this.sessionService.clearSession();
      this.router.navigate(['/login']);
  }
    this.getAllTeacher();
  }

  getAllTeacher(): void {
    this.listTeacherService.getlistTeacher()
      .subscribe(
        response => {
          this.listTeacher = response;
        }, error => {
        }
      );
  }

  DeleteTeacher(id: string) {
    swal({
      title: 'ต้องการลบ',
      text: this.listTeacher.find( x=> x.userId == id).firstname + " " +this.listTeacher.find( x=> x.userId == id).lastname,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: "ยกเลิก"
      
    }).then((result) => {
      if (result.value == true) {
        this.listTeacherService.deleteTeacher(id)
          .subscribe(
            response => {
              swal({
                position: 'center',
                type: 'success',
                title: 'ถูกลบเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                this.getAllTeacher();
              })
            })
      }
      else {
      }
    })
  }

  EditTeacher(userId: string , typeId: number){
    this.sessionService.setEditUserStorage("edit-userId",userId);
    this.sessionService.setEditTypeStorage("edit-typeId",typeId);
    this.router.navigate(['/pages/edit-data/']);
    }

    ResetPassword(userId: string){
      console.log(userId)
      swal({
        title: 'ต้องการรีเซ็ตรหัสผ่าน',
        text: this.listTeacher.find(x => x.userId == userId).firstname + " " + this.listTeacher.find(x => x.userId == userId).lastname,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ใช่',
        cancelButtonText: "ยกเลิก"
      }).then((result) => {
        if (result.value == true) {
          this.listTeacherService.resetPassword(userId)
            .subscribe(
              response => {
                swal({
                  position: 'center',
                  type: 'success',
                  title: 'รหัสผ่านถูกรีเซ็ตเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500
                }).then(() => {
                  this.getAllTeacher();
                })
              })
        }
        else {
          console.log("ผิดพลาด")
        }
      })
    }
}
