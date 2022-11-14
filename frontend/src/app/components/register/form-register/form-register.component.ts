import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../users.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    userGroup: new FormControl(''),
  });

  constructor(private router: Router, private usersService: UsersService, private http: HttpClient) {}

  @Output() onRegister = new EventEmitter<any>();

  ngOnInit(): void {}

  register() {
    const myFormData = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      confirmPassword: this.myForm.value.confirmPassword,
      Usergroup: this.myForm.value.userGroup,
    };
    console.log(myFormData);

    if (this.myForm.value.userGroup === 'cooker') {
      this.router.navigate(['/register/cooker']);
    } else if (this.myForm.value.userGroup === 'contractor') {
      this.router.navigate(['/register/supplier']);
    } else if (this.myForm.value.userGroup === 'supplies') {
      this.router.navigate(['/register/supplies']);
    }

    this.onRegister.emit(myFormData);
  }
}
