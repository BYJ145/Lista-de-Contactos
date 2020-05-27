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
  // Modelos que servira para actualizar los datos (databinding)
  model:any = {};
  // Se agrega metodos para le manejo de los datos
  addEmployee():void{
  }
  deleteEmployee():void{
  }
  editEmployee():void{
  }
  updateEmployee(){
  }

}
