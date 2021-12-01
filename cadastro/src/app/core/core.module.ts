import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { EntrarComponent } from './login/entrar/entrar.component';
import { CriarContaComponent } from './login/criar-conta/criar-conta.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    EntrarComponent,
    CriarContaComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class CoreModule { }
