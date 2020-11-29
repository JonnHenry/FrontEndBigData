import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewRecordsComponent } from './components/view-records/view-records.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { ViewSingleRecordComponent } from './components/view-single-record/view-single-record.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewRecordsComponent,
    EditRecordComponent,
    CreateRecordComponent,
    ViewSingleRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
