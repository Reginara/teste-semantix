import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  // viewFormRegister = true;
  // viewFormSupplier = false;
  // viewFormCooker = false;
  // viewFormSupplies = false;

  constructor(private router: Router) { }

  groups = new FormControl('');
  groupList = new Set([
    'Fornecedor',
    'Cozinheiro',
    'Suprimentos'
  ]);

  ngOnInit(): void {
  }

  // register() {
  //   if (this.groups.value == 'Fornecedor') {
  //     this.viewFormRegister = false;
  //     this.viewFormSupplier = true;
  //   } else if (this.groups.value == 'Cozinheiro') {
  //     this.viewFormRegister = false;
  //     this.viewFormCooker = true;
  //   } else if (this.groups.value == 'Suprimentos') {
  //     this.viewFormRegister = false;
  //     this.viewFormSupplies = true;
  //   }

  //   console.log(this.groups.value);
  // }


}
