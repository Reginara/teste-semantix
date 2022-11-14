import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../users.service';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    Usergroup: new FormControl(),
  });

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userGroup: [],
  };

  constructor(
    private router: Router,
    private usersService: UsersService,
    private http: HttpClient,
    ) { }

  groups = new FormControl('');
  groupList = new Set([
    'Fornecedor',
    'Cozinheiro',
    'Suprimentos'
  ]);

  ngOnInit(): void {
  }

  register() {

  }

}

