import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentPageComponent } from './pages/appointment-page/appointment-page.component';
import { AppointmentListPageComponent } from './pages/appointment-list-page/appointment-list-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppointmentPageComponent,
    AppointmentListPageComponent
    
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AppointmentsModule { }
