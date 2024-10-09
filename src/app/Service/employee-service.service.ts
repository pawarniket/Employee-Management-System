import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../../data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  addEmployee(data:Employee){
    return this.http.post('http://localhost:3000/employees',data);
      }
 
 
  getAllEmployye(){
  return this.http.get<any>('http://localhost:3000/employees');
  }
  deleteEmployee(id: number) {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
}


 }
      

 

