import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onUserTypeChange = new EventEmitter<string>();

  userType = 'contractor';

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {}

  setUserOption(event: any) {
    this.onUserTypeChange.emit(event);
  }
}
