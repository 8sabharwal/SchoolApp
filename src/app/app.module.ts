import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolDashComponent } from './school-dash/school-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import { SignupComponent } from './components/signup/signup.component'
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolDashComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SignupComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
