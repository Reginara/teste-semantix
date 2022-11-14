import { Component, Input } from '@angular/core';

export interface ContractorTable {
  user_id: number;
  user_name: string;
  user_email: string;
  company_name: string;
  cnpj: string;
}

const ELEMENT_DATA: ContractorTable[] = [];

@Component({
  selector: 'app-contractor-table',
  templateUrl: './contractor-table.component.html',
  styleUrls: ['./contractor-table.component.scss'],
})
export class ContractorTableComponent {
  @Input() userList = [];

  displayedColumns: string[] = ['user_id', 'user_name', 'user_email', 'company_name', 'cnpj'];
  dataSource = ELEMENT_DATA;
}
