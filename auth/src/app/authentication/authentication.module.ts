import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzIconModule,
    NzCheckboxModule,
    NzInputModule,
    RouterModule,
    NzSelectModule,
  ],
  exports:[
    LoginComponent 
  ]
})
export class AuthenticationModule { }
