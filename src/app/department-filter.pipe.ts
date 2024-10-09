import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../data-type';

@Pipe({
  name: 'departmentFilter',
  pure: false // Set to false to re-evaluate the pipe when the input changes
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: Employee[], selectedDepartment: string): Employee[] {
    if (!employees || !selectedDepartment) {
      return employees; // Return all employees if no department is selected
    }
    
    // Filter employees based on the selected department
    return employees.filter(employee => employee.department === selectedDepartment);
  }
}
