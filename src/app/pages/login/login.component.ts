import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import swal from 'sweetalert2';
import { userModel } from '../../models/user/user.model';
import { Router } from '@angular/router';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logonForm: FormGroup;
  username: string;
  password: string;
  type: number;

   userdata: userModel = new userModel();
  constructor(
    private loginService: LoginService,
    private sessionService: SessionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.logonForm = formBuilder.group({
      username: [""],
      password: [""],
      
    });
    }

  ngOnInit() {
    this.sessionService.clearSession();
    this.username = "";
    this.password = "";
  }

  Login(){
      this.loginService.LogIn(this.username,this.password)
      .subscribe(
        response => {
         this.userdata = response;        
          if (this.userdata != null) { 
            this.sessionService.setItemToStorage("userdata",this.userdata)
            swal({
              position: 'center',
              type: 'success',
              title: 'ยินดีต้อนรับ',
              showConfirmButton: false,
              timer: 2000
             }).then(() => {
              if(this.userdata.typeId == 101){
                this.router.navigate(['/pages/insert']);
              }else if(this.userdata.typeId == 202){
                this.router.navigate(['/pages/teacher-subject']);
              }else if(this.userdata.typeId == 303){
                this.router.navigate(['/pages/student-subject']);
               
              } 
           })
          }else if(this.userdata == null){
            swal({
              position: 'center',
              type: 'error',
              title: 'ไม่สามารถเข้าสู่ระบบ',
              showConfirmButton: false,
              timer: 2000
            })
          }
        },
         error => {
  
        }
      );     
  }
}
