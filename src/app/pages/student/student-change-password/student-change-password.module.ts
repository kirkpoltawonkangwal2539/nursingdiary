import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentChangePasswordComponent } from './student-change-password.component';
import { StudentChangePasswordRoutes } from './student-change-password.routing';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentChangePasswordService } from './student-change-password.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    StudentChangePasswordRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentChangePasswordComponent
  ],
  providers:[
    StudentChangePasswordService
  ]
})
export class StudentChangePasswordModule { }
