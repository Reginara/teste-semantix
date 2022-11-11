import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { SideNavComponentComponent } from './components/side-nav-component/side-nav-component.component';
import { MenuViewComponent } from './pages/menu-view/menu-view.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { UsergroupListComponent } from './components/usergroup-list/usergroup-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SideNavComponentComponent,
    MenuViewComponent,
    UsergroupListComponent,
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
