import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import { LoginModule } from './core/login/login.module';
import { RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    PanelMenuModule,
    PasswordModule,
    RouterModule,
    ViewsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
