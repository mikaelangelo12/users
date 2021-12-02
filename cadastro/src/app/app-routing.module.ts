import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {path: '',  redirectTo: '/login', pathMatch: 'full'},
  {path: 'admin',  component: ViewsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
