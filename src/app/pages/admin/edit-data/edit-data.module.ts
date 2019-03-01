import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDataComponent } from './edit-data.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRouting } from './edit-data.routing';
import { EditDataService } from './edit-data.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EditRouting,
    FormsModule,
    ReactiveFormsModule,
],
declarations: [
    EditDataComponent
],
providers: [
    EditDataService
]
})
export class EditDataModule { }
