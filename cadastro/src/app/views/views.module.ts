import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { ViewsComponent } from './views.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    ViewsComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    RouterModule
  ],
  exports: [
    AdminComponent,
    ViewsComponent,
    MenuComponent
  ]
})
export class ViewsModule { }
