import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
 
  customers: any;
 
  constructor(private customerService: EmployeeService) { }
 
  ngOnInit() {
    this.getEmployeesList();
  }
 
  getEmployeesList() {
    this.employeeService.getEmployeesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(employees => {
      this.employees = employees;
    });
  }
 
  deleteEmployees() {
    this.employeeService.deleteAll();
  }
 
}
