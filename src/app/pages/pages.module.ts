import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
    ],
    providers:[
        LoginService
    ]
})
export class PagesModule { }
