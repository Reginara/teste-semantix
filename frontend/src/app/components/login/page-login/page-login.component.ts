import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/users.model';
import { UsersService } from '../../../users.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  loginData: LoginData = {
    email: '',
    password: ''
  };

  constructor(
    private service: UsersService,
    private router: Router,
    private http: HttpClient,
    ) { }


  ngOnInit(): void {
  }

  login(): void {
    this.service.newlogin([this.loginData]).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
