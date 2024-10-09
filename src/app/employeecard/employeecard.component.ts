import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../../data-type';

@Component({
  selector: 'app-employeecard',
  templateUrl: './employeecard.component.html',
  styleUrl: './employeecard.component.css'
})
export class EmployeecardComponent {
  constructor(
    public dialogRef: MatDialogRef<EmployeecardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
