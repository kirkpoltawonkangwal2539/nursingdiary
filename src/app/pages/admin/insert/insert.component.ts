import { Component, OnInit } from '@angular/core';
import { InsertModel } from '../../../models/admin/insert.model';
import { InsertService } from './insert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkAndUpdatePureExpressionInline } from '@angular/core/src/view/pure_expression';
import swal from 'sweetalert2';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  insertData: InsertModel = new InsertModel();
  insertForm: FormGroup;
  firstname: string;
  lastname: string;
  id: string;
  password: string;
  type: number;
  check: boolean;
  check_Type: number ;
  constructor(
    private insertService: InsertService,
    private sessionService: SessionService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.insertForm = formBuilder.group({
      firstname: ["", [Validators.required, Validators.nullValidator]],
      lastname: ["", [Validators.required, Validators.nullValidator]],
      id: ["", [Validators.required, Validators.nullValidator]],
      password: ["", [Validators.required, Validators.nullValidator]],
      type: ["", [Validators.required, Validators.nullValidator]]
    });
  }

  ngOnInit() { 
    this.insertData.typeId = 0
  //   this.check_Type = this.sessionService.getItemFromStorage("typeId")
  //   if(this.check_Type != 101){
  //     this.sessionService.clearSession();
  //     this.router.navigate(['/login']);
  // }
}

  InsertPersonalData(): void {
    if (this.insertData.typeId == 0) {
      swal({  
        position: 'center',
        type: 'warning',
        title: 'กรุณากรอกข้อมูลให้ครบ',
        showConfirmButton: false,
        timer: 2000
      }) 
    }
    else if (this.insertData.typeId == 202) {
      this.insertService.insertTeacher(this.insertData)
        .subscribe(
          response => {
            this.check = response;
            if (response == true) {
              swal({
                position: 'center',
                type: 'success',
                title: 'เพิ่มข้อมูลเรียบร้อย',
                showConfirmButton: false,
                timer: 2000
              }).then(() => {
                location.reload();
              })         
            }
            else {
              swal({
                position: 'center',
                type: 'error',
                title: 'เพิ่มข้อมูลผิดพลาด',
                showConfirmButton: false,
                timer: 2000
              })
            }
          }, error => {

          }
        );

    }
    else if (this.insertData.typeId == 303) {
      this.insertService.insertStudent(this.insertData)
        .subscribe(
          response => {
            this.check = response;
            if (response == true) {
              swal({
                position: 'center',
                type: 'success',
                title: 'เพิ่มข้อมูลเรียบร้อย',
                showConfirmButton: false,
                timer: 2000
              }).then(() => {
                location.reload();
              })
            }
            else {
              swal({
                position: 'center',
                type: 'error',
                title: 'เพิ่มข้อมูลผิดพลาด',
                showConfirmButton: false,
                timer: 2000
              })
            }
          }, error => {

          }
        );
    }
  }
}
