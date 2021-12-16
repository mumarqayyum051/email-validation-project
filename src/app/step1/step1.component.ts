// basic imports with library functions
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../core/services/email.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  isFinished = true;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private emailService: EmailService
  ) {}
  ngOnInit() {
    //will create the form on reload
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  //gets executed when clicked on submit on step 1
  onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    this.emailService.createUser(this.form.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status === 200) {
          this.router.navigate(['/2', this.f.email.value]);
        }
      },
      (err) => {
        if (err.code === 422) {
          window.alert(err.message);
          return;
        }
        console.log(err);
        window.alert(err.errors[0].msg);
      }
    );
  }
  //getter to get the email form
  get f() {
    return this.form.controls;
  }
}
