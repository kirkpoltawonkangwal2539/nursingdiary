import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherSubjectDetailComponent } from './teacher-subject-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherSubjectDetailRoutes } from './teacher-subject-detail.routing';
import { TeacherSubjectDetailService } from './teacher-subject-detail.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherSubjectDetailRoutes,
    ModalModule
  ],
  declarations: 
  [TeacherSubjectDetailComponent
  ]
, providers: [
  TeacherSubjectDetailService
]
  
})
export class TeacherSubjectDetailModule { }
