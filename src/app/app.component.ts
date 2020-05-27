import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  // Se crea Objeto de tipo arreglo para almacenar empleados
  employees = [
    {'name': 'Fazt', position: 'Manager'},
    {'name': 'Maria', position: 'Designer'},
    {'name': 'Fernando', position: 'Programmer'}
  ];
}
