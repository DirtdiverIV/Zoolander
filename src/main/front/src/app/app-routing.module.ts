import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ContinentsComponent } from './continents/continents.component';
import { EditformComponent } from './editform/editform.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list/:familyId', component: ListComponent },
  { path: 'continents/:continentId', component: ContinentsComponent },
  { path: 'edit/:animalId', component: EditformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
