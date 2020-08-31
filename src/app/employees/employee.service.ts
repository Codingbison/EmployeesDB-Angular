import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private dbPath = '/employees';
 
  customersRef: AngularFirestoreCollection<Employee> = null;
 
  constructor(private db: AngularFirestore) {
    this.employeesRef = db.collection(this.dbPath);
  }
 
  createEmployee(employee: Employee): void {
    this.employeesRef.add({...employee});
  }
 
  updateEmployee(key: string, value: any): Promise<void> {
    return this.employeesRef.doc(key).update(value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.employeesRef.doc(key).delete();
  }
 
  getCustomersList(): AngularFirestoreCollection<Employee> {
    return this.employeesRef;
  }
 
  deleteAll() {
    this.employeesRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}