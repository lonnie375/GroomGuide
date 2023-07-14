import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StylistsComponent } from './components/stylists/stylists.component';
import { ServicesComponent } from './components/services/services.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path: '', component:StylistsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'appointment', component:AppointmentComponent},
  {path: 'summary', component:SummaryComponent}, 
  {path: 'confirmation', component:ConfirmationComponent},
  {path: 'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
