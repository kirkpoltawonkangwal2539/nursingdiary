import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeacherComponent } from './list-teacher.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTeacherService } from './list-teacher.service';
import { ListTeacherRouting } from './list-teacher.routing';


@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      ListTeacherRouting,
      FormsModule,
      ReactiveFormsModule,
  ],
  declarations: [
      ListTeacherComponent
  ],
  providers: [
      ListTeacherService
  ]
})
export class ListTeacherModule { }
