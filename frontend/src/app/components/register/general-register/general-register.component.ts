import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-register',
  templateUrl: './general-register.component.html',
  styleUrls: ['./general-register.component.scss']
})
export class GeneralRegisterComponent {

  viewFormRegister = true;
  viewFormSupplier = false;
  viewFormCooker = false;
  viewFormSupplies = false;


  constructor(private router:Router) { }


}
