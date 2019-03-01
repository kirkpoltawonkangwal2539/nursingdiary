import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSubjectComponent } from './student-subject.component';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentSubjectRoutes } from './student-subject.routing';
import { StudentSubjectService } from './student-subject.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    StudentSubjectRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentSubjectComponent
  ],
  providers: [
    StudentSubjectService
  ]
})
export class StudentSubjectModule { }
