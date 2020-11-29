import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewRecordsComponent } from './components/view-records/view-records.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { CreateRecordComponent } from './components/create-record/create-record.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewRecordsComponent,
    EditRecordComponent,
    CreateRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
