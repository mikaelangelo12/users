import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { EntrarComponent } from './entrar/entrar.component';
import { LoginComponent } from './login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [
  { path: 'login', redirectTo: 'entrar'},
  { path: 'criar-conta', redirectTo: '/criar-conta' },
  { path: 'login',  component: LoginComponent },
  { path: 'entrar',  component: EntrarComponent },
  { path: 'recuperar',  component: RecuperarComponent },
  { path: 'criar-conta', component: CriarContaComponent }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
