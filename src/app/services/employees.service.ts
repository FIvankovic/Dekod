import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Employees, PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private apiService: ApiService) { }


  getEmployees(url: string): Observable<Employees> {
    return this.apiService.get<Employees>(url);
  }

/*
  getEmployees = (
    url: string, 
    params: PaginationParams
  ): Observable<Employees> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json'
    });
  }
    */
}
