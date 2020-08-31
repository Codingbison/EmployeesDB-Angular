import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 
  employee: Employee = new Employee();
  submitted = false;
 
  constructor(private customerService: EmployeeService) { }
 
  ngOnInit() {
  }
 
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
 
  save() {
    this.employeeService.createEmployee(this.employee);
    this.employee = new Employee();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
 
}
