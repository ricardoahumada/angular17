import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { User } from 'src/app/models/user';

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

  usuarios:Array<User> = [
    { id: 1, nombre: 'Juan', rating: 0 },
    { id: 2, nombre: 'Ana', rating: 2 },
    { id: 3, nombre: 'Luisa', rating: 0 },
  ]

  usuario_class: string = '';
  mostrar_lista: boolean = true;
  texto_boton: string = 'Mostrar';


  elInput: string = 'Un valor';

  constructor() { }

  ngOnInit(): void {
    console.log('Inicializando HelloComponent...');
    setTimeout(() => {
      this.texto = 'hello world"';
      this.mostrar = true;
      this.usuario_class = 'usuarios';
      this.elInput = 'Actutlizado...'
    }, 5000);
  }

  mostrarLista = () => {
    console.log('Mostrar lista...');
    // this.mostrar_lista = true;
    this.texto_boton = 'Ocultar';
    this.mostrar_lista = !this.mostrar_lista;
  }

  aMayuscula = (valor: string): string => {
    return valor.toUpperCase();
  }

  updateRating = (stars: number, uid: number): void => {
    console.log('updateRating:', stars, uid);

    this.usuarios.forEach(aU => {
      if (aU.id == uid) aU.rating = stars;
    })

  }

}
