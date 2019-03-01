import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDiaryDetailComponent } from './student-diary-detail.component';
import { StudentDiaryDetailService } from './student-diary-detail.service';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { StudentDiaryDetailRoutes } from './student-diary-detail.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    StudentDiaryDetailRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StudentDiaryDetailComponent
  ],
  providers: [
    StudentDiaryDetailService
  ]
})
export class StudentDiaryDetailModule { }
