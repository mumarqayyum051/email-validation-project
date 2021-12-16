import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor(private apiService: ApiService) {}

  createUser(user: any): Observable<any> {
    return this.apiService.post('/user/register', user);
  }
  verify(user: any): Observable<any> {
    return this.apiService.post('/user/verifyOTP', user);
  }
  verifyResend(user: any): Observable<any> {
    return this.apiService.post('/user/resendOTP', user);
  }
  sendInvites(emailArray: any[]): Observable<any> {
    return this.apiService.post('/sendInvites', emailArray);
  }
}
