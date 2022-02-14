import { Component } from '@angular/core';
import { User } from 'src/interfaces/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  state = true;

  numeroDeLaClase = "Clase 5";

  image = "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ie80g8dfk979zbsigwvj.png";

  firstNumber = 20;
  secondNumber = 30;

  getText() {
    return "Hola mundo desde la función getText";
  }

  user : User = {
    name: "Juan",
    lastname: "Perez",
    address: {
      street: "Calle falsa 123",
      city: "Ciudad falsa",
      state: "Estado falso"
    },
    hobbies: ["Comer", "Dormir", "Jugar"],
    isActive: true,
    age: 30,
    role: "admin",
    university: "Universidad falsa",
    courses: [
      {
        name: "Angular",
        price: "$100"
      },
      {
        name: "Node",
        price: "$200"
      }
    ]
  };

  courses = ['Angular', 'Node', 'React'];

  deleteHero() {
    alert("Función ejecutada por el usuario");
  }

}
