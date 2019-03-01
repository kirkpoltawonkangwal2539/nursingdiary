import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SessionService } from './service/session.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    LocalStorageModule.withConfig({
      prefix: 'Nursing-Diary',
      storageType: 'localStorage'
  })
    
  ],
  declarations: [
    AppComponent,
  ],
  providers:[
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
