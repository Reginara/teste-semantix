import { Component } from '@angular/core';

export interface CookerTable {
  user_id: number;
  cooker_name: string;
  cooker_email: string;
  cooker_id: string;
}

const COOKER_DATA: CookerTable[] = [];

@Component({
  selector: 'app-cooker-table',
  templateUrl: './cooker-table.component.html',
  styleUrls: ['./cooker-table.component.scss']
})
export class CookerTableComponent {


  displayedColumns: string[] = ['user_id', 'cookers_name', 'cookers_email', 'cookers_id'];
  dataSource = COOKER_DATA;
}
