import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-form-cooker',
  templateUrl: './form-cooker.component.html',
  styleUrls: ['./form-cooker.component.scss'],
})
export class FormCookerComponent implements OnInit {
  cookerForm = new FormGroup({
    cooker_id: new FormControl(''),
  });

  constructor(private readonly service: UsersService) {}

  ngOnInit(): void {}

  register() {}
}
