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
  // Se agrega atrituto para almacenar el index
  myvalue;
  // Se agrega metodos para le manejo de los datos

  addEmployee():void{
    // Guardaremos los datos introducidos a travez del formulario
    this.employees.push(this.model);
  }
  deleteEmployee():void{
  }
  editEmployee(i):void{
    // Se "prepara" los datos para ser actualizados
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    // i = indice el arreglo
    this.myvalue = i;
  }
  updateEmployee():void{
    let ind = this.myvalue;
    for (let index = 0; index < this.employees.length; index++) {
      if(ind == index){
        // Se asigna el modelo en la posicion correspondiente del array
        this.employees[ind] = this.model2;
        // Se limpia el modelo
        this.model2 = {};
      }
      
    }
  }

}
