import { Component, Input } from '@angular/core';

export interface SuppliesTable {
  user_id: number;
  user_name: string;
  user_email: string;
  supplies: string;
}

const SUPPLIES_DATA: SuppliesTable[] = [];

@Component({
  selector: 'app-supplies-table',
  templateUrl: './supplies-table.component.html',
  styleUrls: ['./supplies-table.component.scss'],
})
export class SuppliesTableComponent {
  @Input() userList = [];

  displayedColumns: string[] = ['user_id', 'user_name', 'user_email', 'supplies'];
  dataSource = SUPPLIES_DATA;
}
