// these are the basic import files. Each line is exporting a special library to achieve special functions
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component implements OnInit {
  @ViewChild('myForm') div!: ElementRef;
  scrollPosition = '1';
  allowAccept = true;
  class = '';
  constructor(private router: Router) {}

  ngOnInit() {}
  //this function controls the scrol events and tell us when to enable shadow on top or at bottom
  scrollHandler(event: any) {
    // visible height + pixel scrolled >= total height
    // console.log(event.target.offsetHeight + event.target.scrollTop);
    //  event.target.offsetHeight + event.target.scrollTop >=
    //   event.target.scrollHeight
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.scrollPosition = '2';
      console.log(this.scrollPosition);
      console.log('End');
    }
    if (event.target.scrollTop <= 56) {
      this.scrollPosition = '1';
      this.class = '';
      console.log('start');
    }
    console.log(event.target.scrollTop);
    if (event.target.scrollTop > 245 && event.target.scrollTop < 390) {
      this.scrollPosition = '3';
      console.log(this.scrollPosition);
      this.class = 'is-stickey';
    }
  }
}
