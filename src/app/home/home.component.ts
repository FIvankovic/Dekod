// home.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Employee, Employees } from '../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginatorModule, PageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  displayedEmployees: Employee[] = [];
  totalRecords: number = 0;
  rows: number = 5;
  currentPage: number = 0;
  searchTerm: string = '';

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.fetchEmployees(0,this.rows);
  }
  
  fetchEmployees(page: number,perPage:number): void {
    const url = 'https://api.test.ulaznice.hr/paganini/api/job-interview/employees';
    this.employeesService.getEmployees(url)
    .subscribe((employees: Employees) => {
      console.log(employees);
      this.allEmployees = employees.data;
      this.filteredEmployees = [...this.allEmployees];
      this.totalRecords = employees.total;
    });
  }//fetchEmployees func end

  onPageChange(event: any){
    this.fetchEmployees(event.page, event.rows);
  }

  onSearch(): void {
    if(this.searchTerm.trim() === ''){
      this.filteredEmployees = [...this.allEmployees];
    } else {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      this.filteredEmployees = this.allEmployees.filter(employee =>
        employee.firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
        employee.lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
        employee.jobTitle.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  }//onSearch func end
}//HomeComponent

