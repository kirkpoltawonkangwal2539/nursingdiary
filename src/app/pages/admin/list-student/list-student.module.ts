import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListStudentComponent } from './list-student.component';
import { ListStudentService } from './list-student.service';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { ListStudentRouting } from './list-student.routing';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      ListStudentRouting,
      FormsModule,
      ReactiveFormsModule,
  ],
  declarations: [
      ListStudentComponent
  ],
  providers: [
      ListStudentService
      
  ]
})
export class ListStudentModule { }
