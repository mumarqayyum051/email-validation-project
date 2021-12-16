import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { EmailService } from './services/email.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [ApiService, EmailService],
})
export class CoreModule {}
