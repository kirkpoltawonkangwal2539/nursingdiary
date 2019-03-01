import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiaryRoutes } from './student-diary-create.routing';
import { StudentDiaryCreateComponent } from './student-diary-create.component';
import { StudentDiaryCreateService } from './student-diary-create.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    DiaryRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentDiaryCreateComponent
  ],
  providers: [
    StudentDiaryCreateService
  ]

})
export class StudentDiaryCreateModule { }
