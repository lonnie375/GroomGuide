import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StylistsComponent } from './components/stylists/stylists.component';
import { ServicesComponent } from './components/services/services.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    StylistsComponent,
    ServicesComponent,
    AppointmentComponent,
    SummaryComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
