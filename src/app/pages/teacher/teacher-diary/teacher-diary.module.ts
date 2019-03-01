import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDiaryComponent } from './teacher-diary.component';
import { TeacherDiaryService } from './teacher-diary.service';
import { TeacherDiaryRoutes } from './teacher-diary.routing';
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
    TeacherDiaryRoutes
  ],
  declarations: [
    TeacherDiaryComponent
  ], providers: [
    TeacherDiaryService
  ]
})
export class TeacherDiaryModule { }
