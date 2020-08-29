import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  precio:number;
  visita:number;
  nombre:string;
  dui:string;
  cliente:any;
  auto:string;
  //cliente = new Cliente('','','', 1);
  registrados = [];
  contador:number = 0;
  guardar = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.guardar=true;
    this.cliente = {"dui":this.dui,"nombre":this.nombre,"visita":1,"auto":this.auto};
    this.registrados.push(this.cliente);
    console.log(this.registrados);
    this.contador++;
  }

  onRegreso(){
    this.guardar=false;
    this.contador=0;
  }
}
