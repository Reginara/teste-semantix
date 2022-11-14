import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { LoginData } from 'src/users.model';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  loginData: LoginData = {
    email: '',
    password: '',
  };

  constructor(private service: UsersService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  login(): void {
    this.service.newlogin(this.loginData).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/list']);
    });
  }
}
