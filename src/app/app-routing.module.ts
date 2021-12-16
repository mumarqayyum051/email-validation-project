import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';

const routes: Routes = [
  { path: '1', component: Step1Component },
  { path: '2', component: Step2Component },
  { path: '2/:email', component: Step2Component },
  { path: '3', component: Step3Component },
  { path: '4', component: Step4Component },
  { path: '**', redirectTo: '/1' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
