import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../core/services/email.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
})
export class Step4Component implements OnInit {
  isAllowedToInvites: boolean = false;
  inputsArray = [
    { label: 'Email', type: 'email', email: '' },
    { label: 'Email', type: 'email', email: '' },
    { label: 'Email', type: 'email', email: '' },
  ];
  constructor(private emailService: EmailService, private router: Router) {}
  ngOnInit() {}
  //checks if the email is valid and follows a valid email pattern
  checkValidation() {
    const isAllValidate = this.inputsArray.filter((element) =>
      element.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ).length;
    if (isAllValidate === this.inputsArray.length) {
      this.isAllowedToInvites = true;
    } else {
      this.isAllowedToInvites = false;
    }
  }
  writeEmail(email: any, i: any) {
    const element = email.currentTarget as HTMLInputElement;
    const value = element.value;
    this.inputsArray[i].email = value;
  }

  sendInvites() {
    if (!this.isAllowedToInvites) {
      window.alert('Please enter valid emails');
      return;
    }
    this.emailService
      .sendInvites(this.inputsArray)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
