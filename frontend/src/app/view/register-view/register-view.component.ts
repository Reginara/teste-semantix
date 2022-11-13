import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  viewFormRegister = true;
  viewFormSupplier = false;
  viewFormCooker = false;
  viewFormSupplies = false;

  constructor() { }

  ngOnInit(): void {
  }

}
