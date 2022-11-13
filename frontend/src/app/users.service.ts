import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData, User } from 'src/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:3001';

constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }

  // email informado no corpo da requisição
  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users/' + email);
  }

  getUserByGroup(userGroup: string): Observable<any> {
    return this.http.get(this.baseUrl + '/users/group/' + userGroup);
  }

  createUser(user: Array<User>): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  newlogin(user: Array<LoginData>): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
}
