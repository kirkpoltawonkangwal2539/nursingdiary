import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherCreateSubjectComponent } from './teacher-create-subject.component';
import { TeacherCreateSubjectRoutes } from './teacher-create-subject.routing';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherCreateSubjectService } from './teacher-create-subject.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherCreateSubjectRoutes
  ],
  declarations: [
    TeacherCreateSubjectComponent
  ],
  providers: [
    TeacherCreateSubjectService

  ]
})
export class TeacherCreateSubjectModule { }
