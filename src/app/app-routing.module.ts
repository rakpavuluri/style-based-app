import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'c/a', pathMatch: 'full' },
  { path: 'c/:companyName', component: CompanyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
