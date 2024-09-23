import { Component, Input } from '@angular/core';
import { Employee } from '../../../types';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  @Input() employee!: Employee;
}
