import { Employee } from './../../data-type';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeServiceService } from './Service/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
   
  }
  dialog = inject(MatDialog);

  constructor(private form: MatDialog, private employeeservice: EmployeeServiceService, private router: Router) {

  }
  openDialog() {
    this.dialog.open(AddEmployeeComponent, {
      width: '30%'
    });
  }
  viewEmp() {
    this.dialog.open(EmployeeListComponent, {
      width: '50%'
    });
  }
}
