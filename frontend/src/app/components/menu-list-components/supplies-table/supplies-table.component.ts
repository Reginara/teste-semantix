import { Component } from '@angular/core';

export interface SuppliesTable {
  user_id: number;
  supplies_name: string;
  supplies_email: string;
  supplies_options: string;
}

const SUPPLIES_DATA: SuppliesTable[] = [];

@Component({
  selector: 'app-supplies-table',
  templateUrl: './supplies-table.component.html',
  styleUrls: ['./supplies-table.component.scss']
})
export class SuppliesTableComponent {


  displayedColumns: string[] = ['user_id', 'supplies_name', 'supplies_email', 'supplies_options'];
  dataSource = SUPPLIES_DATA;
}
