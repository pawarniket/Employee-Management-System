import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../Service/employee-service.service';
import { Employee } from '../../../data-type';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog, MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  addEmployeeForm: FormGroup;
  dialog = inject(MatDialog);



  constructor(private fb: FormBuilder,
    private employeeService: EmployeeServiceService,
    private snackBar: MatSnackBar
  ) {
    this.addEmployeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      department: ['', Validators.required],
      date: [null, Validators.required]
    });
  }

  submit(data: Employee) {
    console.log(data);
    if (this.addEmployeeForm.valid) {
      this.employeeService.addEmployee(data).subscribe((result) => {
        if (result) {
          console.log("sucessfully added");
          this.openSnackBar('Employee added successfully!', 'Close');
          this.addEmployeeForm.reset();
          this.dialog.closeAll();
        }
      },
        (error) => {
          console.error("Error adding employee:", error);

        }
      );
    } else {
      console.log("Form is invalid. Please check the inputs.");

    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
