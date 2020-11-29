import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { ViewRecordsComponent } from './components/view-records/view-records.component';

const routes: Routes = [
  { path: 'create', component: CreateRecordComponent },
  { path: 'edit/:fligthId', component: EditRecordComponent },
  { path: 'view', component: ViewRecordsComponent },
  { path: '',   redirectTo: '/view', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
