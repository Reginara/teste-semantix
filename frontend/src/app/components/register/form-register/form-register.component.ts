import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/users.model';
import { UsersService } from '../../../users.service';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: '',
    userGroup: '',
  }

  constructor(private router: Router) { }

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
