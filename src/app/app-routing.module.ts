import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeecardComponent } from './employeecard/employeecard.component';

const routes: Routes = [

  { path: 'Add-Employee', component: AddEmployeeComponent},
  { path: 'Employee-List', component: EmployeeListComponent},
  { path: 'Employee-Card', component: EmployeecardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
