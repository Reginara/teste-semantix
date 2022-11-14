import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-supplies',
  templateUrl: './form-supplies.component.html',
  styleUrls: ['./form-supplies.component.scss'],
})
export class FormSuppliesComponent {
  supplies = new FormControl('');
  suppliesList: string[] = ['Arroz', 'Feijão', 'Macarrão'];
}
