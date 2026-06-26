import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentPageComponent} from './pages/appointment-page/appointment-page.component';
import { AppointmentListPageComponent } from './pages/appointment-list-page/appointment-list-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: AppointmentPageComponent
  },
  {
    path: 'list',
    component: AppointmentListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
