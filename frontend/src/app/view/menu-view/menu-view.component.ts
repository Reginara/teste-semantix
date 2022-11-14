import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss'],
})
export class MenuViewComponent implements OnInit {
  constructor(private readonly usersService: UsersService) {}
  destroy$ = new Subject();
  userType: string = 'contractor';
  isLoading = true;
  userList = [];

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.usersService
      .getUserByGroup(this.userType)
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => {
        console.log(users);
        this.userList = users;
        this.isLoading = false;
      });
  }

  onUserTypeChange(userType: string) {
    this.userType = userType;
    console.log({ userType });
    this.getUserList();
  }
}
