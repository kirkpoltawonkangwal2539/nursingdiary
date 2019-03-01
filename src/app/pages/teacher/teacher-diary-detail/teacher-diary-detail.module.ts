import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDiaryDetailComponent } from './teacher-diary-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { TeacherDiaryDetailRoutes } from './teacher-diary-detail.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherDiaryDetailService } from './teacher-diary-detail.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    TeacherDiaryDetailRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeacherDiaryDetailComponent
  ],
  providers: [
    TeacherDiaryDetailService
  ]
})
export class TeacherDiaryDetailModule { }
