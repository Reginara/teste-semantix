import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/menu-list-components/header/header.component';
import { SidenavComponent } from './components/menu-list-components/sidenav/sidenav.component';
import { MenuViewComponent } from './view/menu-view/menu-view.component';
import { UsergroupListComponent } from './components/menu-list-components/usergroup-list/usergroup-list.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { PageLoginComponent } from './components/login/page-login/page-login.component';
import { RegisterViewComponent } from './view/register-view/register-view.component';
import { GeneralRegisterComponent } from './components/register/general-register/general-register.component';
import { FormRegisterComponent } from './components/register/form-register/form-register.component';
import { FormSupplierComponent } from './components/register/form-supplier/form-supplier.component';
import { FormCookerComponent } from './components/register/form-cooker/form-cooker.component';
import { FormSuppliesComponent } from './components/register/form-supplies/form-supplies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MenuViewComponent,
    UsergroupListComponent,
    LoginViewComponent,
    PageLoginComponent,
    RegisterViewComponent,
    GeneralRegisterComponent,
    FormRegisterComponent,
    FormSupplierComponent,
    FormCookerComponent,
    FormSuppliesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
