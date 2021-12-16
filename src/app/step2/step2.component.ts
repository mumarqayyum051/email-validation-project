import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { EmailService } from '../core/services/email.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  email: any = 'lucas@example.com';
  isFilled: any = true;
  OTP: any = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    // this line tell us the email user has entered on step 1 and saves it in email variable
    this.route.params.subscribe((params) => {
      this.email = params['email'];
    });
    console.log(this.isFilled);
  }

  // this is the basic configuration of OTP boxes
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autoblur: true,
    autofocus: true,
    classList: {
      inputBox: 'form-group',
      input: 'form-control',
      inputFilled: 'text-warning',
      inputDisabled: 'text-success',
      inputSuccess: 'text-success',
      inputError: 'text-danger',
    },
  };
  //this function gets executed when user click on confirm
  onConfirmClicked() {
    console.log(this.OTP, this.email);
    if (this.OTP === 0) {
      window.alert('Please enter a valid OTP');
      return;
    }
    if (this.email === 'lucas@example.com') {
      window.alert('Please sign up first');
      return;
    }
    this.emailService.verify({ email: this.email, OTP: this.OTP }).subscribe(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          this.router.navigate(['/3']);
        }
      },
      (err) => {
        window.alert('OTP Invalid!');
      }
    );
  }
  //this function gets called when user needs us to resend the OTP
  onResendClicked() {
    if (this.email === 'lucas@example.com') {
      window.alert('Please sign up first');
      return;
    }
    this.emailService.verifyResend({ email: this.email }).subscribe(
      (res) => {
        console.log(res);
        window.alert(`OTP resent to ${this.email}`);
      },
      (err) => {
        window.alert('Error occured while sending the OTP');
      }
    );
  }
  //this function enables the confirm button once 6 OTP boxes get filled
  enableBtn(e: any) {
    this.isFilled = false;
    this.OTP = e;
    console.log(this.OTP, this.isFilled);
  }
}
