import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './insert.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertService } from './insert.service';
import { PersonalRouting } from './insert.routing';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PersonalRouting,
        FormsModule,
        ReactiveFormsModule,
    
    ],
    declarations: [
        InsertComponent
    ],
    providers: [
        InsertService
    ]
})
export class InsertModule { }
