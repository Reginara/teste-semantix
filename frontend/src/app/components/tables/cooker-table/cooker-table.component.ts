import { Component, Input } from '@angular/core';

export interface CookerTable {
  user_id: number;
  useer_name: string;
  useer_email: string;
  cookerId: string;
}

const COOKER_DATA: CookerTable[] = [];

@Component({
  selector: 'app-cooker-table',
  templateUrl: './cooker-table.component.html',
  styleUrls: ['./cooker-table.component.scss'],
})
export class CookerTableComponent {
  @Input() userList = [];

  displayedColumns: string[] = ['user_id', 'user_name', 'user_email', 'cookerId'];
  dataSource = COOKER_DATA;
}
