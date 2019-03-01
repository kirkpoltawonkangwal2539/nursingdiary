import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDiaryComponent } from './student-diary.component';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDiaryRoutes } from './student-diary.routing';
import { StudentDiaryService } from './student-diary.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    StudentDiaryRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentDiaryComponent
  ],
  providers: [
    StudentDiaryService
  ]

})
export class StudentDiaryModule { }
