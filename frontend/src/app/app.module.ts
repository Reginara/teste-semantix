import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/menu-list-components/header/header.component';
import { SidenavComponent } from './components/menu-list-components/sidenav/sidenav.component';
import { MenuViewComponent } from './pages/menu-view/menu-view.component';
import { UsergroupListComponent } from './components/menu-list-components/usergroup-list/usergroup-list.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { PageLoginComponent } from './components/login-components/page-login/page-login.component';
import { CardLoginComponent } from './components/login-components/card-login/card-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MenuViewComponent,
    UsergroupListComponent,
    LoginViewComponent,
    PageLoginComponent,
    CardLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
