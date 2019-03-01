import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleInsertComponent } from './multiple-insert.component';
import { MultipleInsertRoutes } from './multiple-insert.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultipleInsertService } from './multiple-insert.service';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
      SharedModule,
      MultipleInsertRoutes,
      FormsModule,
      ReactiveFormsModule,
      FileUploadModule,
      SelectModule,
  ],
  declarations: [
    MultipleInsertComponent
  ],
  providers:[
    MultipleInsertService
  ]
})
export class MultipleInsertModule { }
