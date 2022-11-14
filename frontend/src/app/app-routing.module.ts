import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuViewComponent } from './view/menu-view/menu-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { RegisterViewComponent } from './view/register-view/register-view.component';
import { FormCookerComponent } from './components/register/form-cooker/form-cooker.component';
import { FormSuppliesComponent } from './components/register/form-supplies/form-supplies.component';
import { FormSupplierComponent } from './components/register/form-supplier/form-supplier.component';

const routes: Routes = [
  {
    path: '',
    component: LoginViewComponent,
  },
  {
    path: 'list',
    component: MenuViewComponent,
  },
  {
    path: 'register',
    component: RegisterViewComponent,
  },
  {
    path: 'register/cooker',
    component: FormCookerComponent,
  },
  {
    path: 'register/supplies',
    component: FormSuppliesComponent,
  },
  {
    path: 'register/supplier',
    component: FormSupplierComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
