import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent {
  dni:string;
  nombre:string;
  saldo:number;

  constructor(@Inject('Dni') private Dni: string, @Inject('Nombre') private Nombre: string){
    this.dni = Dni;
    this.nombre = Nombre;
    this.saldo = 0;
  }

  anadirSaldo(NuevoSaldo: number){
    this.saldo += NuevoSaldo;
  }
}

//let yo = new ClienteComponent("123", "jose");
