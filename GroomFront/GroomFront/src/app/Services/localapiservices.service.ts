import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointments } from '../Interfaces/appointments';
import { Services } from '../Interfaces/services';
import { Stylists } from '../Interfaces/stylists';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  private apiUrl = `${environment.apiUrl}/Appointment`;
  private apiUrlServices = `${environment.apiUrl}/Services`;
  private apiUrlStylists = `${environment.apiUrl}/Stylists`;


  constructor(private http: HttpClient) { }

  // Create Appointment
  createAppointment(appt: Appointments): Observable<any> {
    return this.http.post(`${this.apiUrl}/CreateAppointment`, appt);
  }

  // Get All Appointments by Stylist
  getAllAppointmentsByStylist(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetStylistAppointments?id=${id}`);
  }

  // Delete Appointment
  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteAppointment?id=${id}`);
  }

  // Edit Appointment
  editAppointment(id: number, appointment: Appointments): Observable<any> {
    return this.http.put(`${this.apiUrl}/EditAppointment?id=${id}`, appointment);
  }



  
  // Create Service
  createService(service: Services): Observable<any> {
    return this.http.post(`${this.apiUrlServices}/CreateService`, service);
  }

  // Get All Services by Stylist
  getAllServicesByStylist(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlServices}/GetAllServices?id=${id}`);
  }

  // Delete Service
  deleteService(stylistID: number, name: string): Observable<any> {
    return this.http.delete(`${this.apiUrlServices}/DeleteStylistService?stylistID=${stylistID}&name=${name}`);
  }

  // Edit Service
  editStylistServices(id: number, service: Services): Observable<any> {
    return this.http.put(`${this.apiUrlServices}/EditStylistServices?id=${id}`, service);
  }


  
  // Create Stylist
  createStylist(style: Stylists): Observable<any> {
    return this.http.post(`${this.apiUrlStylists}/CreateStylist`, style);
  }

  // Get All Stylists
  getAllStylists(): Observable<any> {
    return this.http.get(`${this.apiUrlStylists}/GetAllStylist`);
  }

  // Get Stylists by Id 
  getStylistById(id: number): Observable<any> 
  {
    return this.http.get(`${this.apiUrlStylists}/GetStylistById?id=${id}`); 
  }

  // Delete Stylist
  deleteStylist(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlStylists}/DeleteStylist?id=${id}`);
  }

  // Update Stylist
  updateStylist(id: number, style: Stylists): Observable<any> {
    return this.http.put(`${this.apiUrlStylists}/UpdateStylist?id=${id}`, style);
  }
}
