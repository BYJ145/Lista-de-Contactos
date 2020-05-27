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
    {'name': 'Fazt', position: 'Manager', email: 'Fazt@gmail.com'},
    {'name': 'Maria', position: 'Designer', email: 'MariaD@gmail'},
    {'name': 'Fernando', position: 'Programmer', email: 'FernandoP'}
  ];
  // Modelos que servira para actualizar los datos (databinding)
  model : any = {};
  model2 : any = {};
  // Se agrega metodos para le manejo de los datos
  addEmployee():void{
    // Guardaremos los datos introducidos a travez del formulario
    this.employees.push(this.model);
  }
  deleteEmployee(i):void{
  }
  editEmployee(i):void{
  }
  updateEmployee(){
  }

}
