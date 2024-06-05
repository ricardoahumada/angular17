import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnInit {

  texto: string | null = null;

  mostrar: boolean = false;

  objeto = {
    id: 1,
    nombre: 'Juan'
  };

  usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Luisa' },
  ]

  usuario_class: string = '';
  mostrar_lista: boolean = false;
  texto_boton: string = 'Mostrar';


  elInput:string = 'Un valor';

  constructor() { }

  ngOnInit(): void {
    console.log('Inicializando HelloComponent...');
    setTimeout(() => {
      this.texto = 'hello world"';
      this.mostrar = true;
      this.usuario_class = 'usuarios';
      this.elInput='Actutlizado...'
    }, 5000);
  }

  mostrarLista = () => {
    console.log('Mostrar lista...');
    // this.mostrar_lista = true;
    this.texto_boton='Ocultar';
    this.mostrar_lista=!this.mostrar_lista;
  }

}
