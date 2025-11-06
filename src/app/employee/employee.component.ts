import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  empList=[
    {id:1, name:"Lakatos Armando", city:"Budapest",salary: 395.5},
    {id:2, name:"Lakatos Emanuel", city:"Szeged",salary: 398.4},
    {id:3, name:"Fekete Ferenc", city:"Eger",salary: 394.8},
    {id:4, name:"Nagy István", city:"Pécs",salary: 399.9},
    {id:5, name:"Kis Béla", city:"Szeged",salary: 381.2},
    {id:6, name:"Kardos Pista", city:"Budapest",salary: 385.6},
    {id:7, name:"Éles Miklós", city:"Budapest",salary: 387.7},
    {id:8, name:"Arany Lajos", city:"Eger",salary: 388.8}
  ]
}
