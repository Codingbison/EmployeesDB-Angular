import { Employee } from './../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

 
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  @Input() employee: Employee;
 
  constructor(private employeeService: EmployeeService) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.employeeService
      .updateCustomer(this.employee.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.employee.key)
      .catch(err => console.log(err));
  }
 
}