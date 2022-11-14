import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from 'src/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly baseUrl = 'http://localhost:3001';
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*',
        Authorization: localStorage.getItem('token') || '',
      }),
    };
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users');
  }

  getUserByGroup(userGroup: string): Observable<any> {
    return this.http.get(this.baseUrl + '/users/' + userGroup, this.httpOptions);
  }

  createUser(user: Array<User>): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  newlogin(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + '/login', {
      ...userData,
    });
  }
}
