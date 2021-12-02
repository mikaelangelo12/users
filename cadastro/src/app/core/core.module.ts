import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FooterComponent } from './footer/footer.component';

import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    LoginModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
