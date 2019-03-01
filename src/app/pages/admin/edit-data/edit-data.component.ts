import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditDataService } from './edit-data.service';
import { userModel } from '../../../models/user/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import swal from 'sweetalert2';
import { SessionService } from '../../../service/session.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  id: string;
  private sub: any;
  userdata: userModel = new userModel();
  editForm: FormGroup;
  firstname: string;
  lastname: string;
  password: string;
  type: number;
  check_Type: number ;
  edit_userId :string;
  edie_typeId :number;
  constructor(
    private route: ActivatedRoute,
    private editDataService: EditDataService,
    private router: Router,
    private sessionService: SessionService,
    private formBuilder: FormBuilder) {
    this.editForm = formBuilder.group({
      firstname: ["", [Validators.required, Validators.nullValidator]],
      lastname: ["", [Validators.required, Validators.nullValidator]],
      id: ["", [Validators.required, Validators.nullValidator,]]
    });
  }

  ngOnInit() {
    this.check_Type = this.sessionService.getItemFromStorage("typeId")
    if(this.check_Type != 101){
      this.sessionService.clearSession();
      this.router.navigate(['/login']);
  }
  this.edit_userId = this.sessionService.getItemFromStorage("edit-userId");
  this.edie_typeId = this.sessionService.getItemFromStorage("edit-typdId");
console.log(this.edit_userId + this.edie_typeId)
  if(this.edie_typeId == 202){
    this.getteacher()
  }else if(this.edie_typeId == 303){
    this.getstudent()
  }
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['userId'];
    //   this.type = params['typeId'];
    //   if (this.type == 202) {
    //     this.getteacher()
    //   }
    //   else if (this.type == 303) {
    //     this.getstudent()
    //   }
    // });
  }

  getstudent(): void {
    this.editDataService.getStudent(this.edit_userId)
      .subscribe(
        response => {
          this.userdata = response;
        }, error => {
        }
      );
  }

  getteacher(): void {
    this.editDataService.getTeacher(this.edit_userId)
      .subscribe(
        response => {
          this.userdata = response;
        }, error => {
        }
      );
  }
back(){
  if(this.edie_typeId == 202 ){
    this.router.navigate(['/pages/list-teacher']);
  }
  else if 
  (this.edie_typeId == 303){
    this.router.navigate(['/pages/list-student']);
  } 
  
}
  editStudent(): void {
    if (this.userdata.typeId == 202) {
      this.editDataService.editTeacher(this.userdata)
        .subscribe(
          response => {
            if (response == true) {
              swal({
                position: 'center',
                type: 'success',
                title: 'แก้ไขข้อมูลเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                this.router.navigate(['/pages/list-teacher']);
              })
            }
            else {
              swal({
                position: 'center',
                type: 'error',
                title: 'ไม่สามารถแก้ไขข้อมูลได้',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }, error => {
          }
        );
    }
    else if (this.userdata.typeId == 303) {
      this.editDataService.editStudent(this.userdata)
        .subscribe(
          response => {
            if (response == true) {
              swal({
                position: 'center',
                type: 'success',
                title: 'แก้ไขข้อมูลเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                this.router.navigate(['/pages/list-student']);
              })
            }
            else {
              swal({
                position: 'center',
                type: 'error',
                title: 'ไม่สามารถแก้ไขข้อมูลได้',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }, error => {
          }
        );
    }
  }
}
