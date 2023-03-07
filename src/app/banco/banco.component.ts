import { Component } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./bootstrap-theme.min.css', './bootstrap.min.css', './fontAwesome.css', './hero-slider.css', './tooplate-style.css'],
})
export class BancoComponent {
  Clientes: Array<ClienteComponent> = [];

  constructor() {
    this.Clientes = [];
  }

  anadirCliente() {
    let dni = (<HTMLInputElement>document.getElementById('dni')).value;
    let nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    let cliente = new ClienteComponent(dni, nombre);
    this.Clientes.push(cliente);
    this.obtenerClientes();
  }

  obtenerClientes() {
    //return this.Clientes;
    //let text_clientes = (<HTMLInputElement>document.getElementById("clientes"));
    (<HTMLInputElement>document.getElementById('clientes')).innerHTML = "";
    for (const cliente of this.Clientes) {
      (<HTMLInputElement>document.getElementById('clientes')).innerHTML +=
        'Cliente: ' +
        cliente.nombre +
        ', con dni: ' +
        cliente.dni +
        ', tiene un saldo de: ' +
        cliente.saldo + ' €\n\n';
    }
  }

  ingresarCantidad() {
    let dni = (<HTMLInputElement>document.getElementById('dni_ingresar')).value;
    let cantidad_ingresar = (<HTMLInputElement>(
      document.getElementById('cantidad_ingresada')
    )).value;
    for (const cliente of this.Clientes) {
      if (cliente.dni == dni) {
        cliente.anadirSaldo(parseInt(cantidad_ingresar));
      }
    }
    this.obtenerClientes()
  }

  quitarCantidad(){
    let dni = (<HTMLInputElement>document.getElementById('dni_ingresar')).value;
    let cantidad_quitar = (<HTMLInputElement>(
      document.getElementById('cantidad_quitar')
    )).value;
    for (const cliente of this.Clientes) {
      if (cliente.dni == dni) {
        cliente.quitarSaldo(parseInt(cantidad_quitar));
      }
    }
    this.obtenerClientes()
  }
}
