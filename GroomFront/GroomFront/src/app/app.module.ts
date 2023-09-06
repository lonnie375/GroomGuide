import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { StylistsComponent } from './components/stylists/stylists.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    StylistsComponent,
    ServicesComponent,
    ConfirmationComponent,
    PaymentComponent,
    SummaryComponent,
    NavbarComponent,
    FooterComponent
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
