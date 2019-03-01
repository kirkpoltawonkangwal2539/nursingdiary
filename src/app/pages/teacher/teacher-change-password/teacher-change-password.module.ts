import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherChangePasswordComponent } from './teacher-change-password.component';
import { TeacherChangePasswordRoutes } from './teacher-change-password.routing';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherChangePasswordService } from './teacher-change-password.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    TeacherChangePasswordRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeacherChangePasswordComponent
  ],
  providers:[
    TeacherChangePasswordService
  ]
})
export class TeacherChangePasswordModule { }
