import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ContinentsComponent } from './continents/continents.component';
import { EditformComponent } from './editform/editform.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list/:familyId', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'continents/:continentId', component: ContinentsComponent },
  { path: 'edit/:animalId', component: EditformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
