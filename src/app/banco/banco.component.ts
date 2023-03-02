import { Component } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.sass']
})
export class BancoComponent {
  Clientes:Array<ClienteComponent> = [];

  constructor(){
    this.Clientes = [];
  }

  anadirCliente(){
    let dni = (<HTMLInputElement>document.getElementById("dni")).value;
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let cliente = new ClienteComponent(dni, nombre);
    this.Clientes.push(cliente);
  }

  obtenerClientes(){
    return this.Clientes;
  }
}
