import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeServiceService } from '../Service/employee-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../../../data-type';
import { EmployeecardComponent } from '../employeecard/employeecard.component';
import { flush } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'department', 'date','Employee card','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.Employeelist();
  }
  constructor(private form: MatDialog,
    private employeeservice: EmployeeServiceService,
    private snackBar: MatSnackBar

  ) {
  }
  Employeelist() {
    this.employeeservice.getAllEmployye().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  viewEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeecardComponent, {
      width: '30%',
      data: employee
    });
  }
  deleteEmployee(employeeId: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeservice.deleteEmployee(employeeId).subscribe(
        response => {
          this.Employeelist();
          this.openSnackBar('Delete Sucessfully!', 'Close'); 

        },
        error => {
          console.error('Error deleting employee:', error);
        }
      );

    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, 
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
    openDialog() {
    this.dialog.open(AddEmployeeComponent, {
      width: '30%'
    });
  }
}
