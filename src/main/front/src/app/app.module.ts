import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { CreateformComponent } from './createform/createform.component';
import { EditformComponent } from './editform/editform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FamilySelectorComponent } from './family-selection/family-selection.component';
import { AnimalsService } from './animals.service';

import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ContinentsComponent } from './continents/continents.component';
import { ContinentsService } from './continents.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list/:familyId', component: ListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    CreateformComponent,
    EditformComponent,
    DashboardComponent,
    FamilySelectorComponent,
    TestComponent,
    ContinentsComponent // Actualicé el nombre del componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  providers: [DatePipe, ContinentsService, AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
