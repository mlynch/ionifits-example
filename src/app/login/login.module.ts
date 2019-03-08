import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmplifyAngularModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  providers: [AmplifyService]
})
export class LoginPageModule {}
