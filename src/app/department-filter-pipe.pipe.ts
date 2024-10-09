import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentFilterPipe'
})
export class DepartmentFilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
