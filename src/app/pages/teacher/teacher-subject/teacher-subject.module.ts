import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherSubjectComponent } from './teacher-subject.component';
import { TeacherSubjectService } from './teacher-subject.service';
import { TeacherSubjectRoutes } from './teacher-subject.routing';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherSubjectRoutes
  ],
  declarations: [
    TeacherSubjectComponent
  ], providers: [

    TeacherSubjectService
  ]
})
export class TeacherSubjectModule { }
