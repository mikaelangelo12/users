import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar/entrar.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    EntrarComponent,
    CriarContaComponent,
    LoginComponent,
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule
  ],
  exports: [
    EntrarComponent,
    LoginComponent,
    CriarContaComponent,
  ]
})
export class LoginModule { }
