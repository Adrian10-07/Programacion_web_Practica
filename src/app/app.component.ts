import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, dadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje: string ="";
  dados: { valor: number, bloqueado: boolean, marcado: boolean }[] = [
    { valor: 1, bloqueado: false, marcado: false },
    { valor: 2, bloqueado: false, marcado: false },
    { valor: 3, bloqueado: false, marcado: false },
    { valor: 4, bloqueado: false, marcado: false },
    { valor: 5, bloqueado: false, marcado: false }
  ];

  girarTodos() {
    this.dados.forEach(dado => {
      if (!dado.bloqueado) {
        dado.valor = Math.floor(Math.random() * 6) + 1;
      }
    });
    this.tresDeUnTipo();
    this.CuatroDeUnTipo;
  }

  girarDadoIndividual(index: number) {
    if (!this.dados[index].bloqueado) {
      this.dados[index].valor = Math.floor(Math.random() * 6) + 1;
    }
    this.tresDeUnTipo();
    this.CuatroDeUnTipo();
  }

  bloquearDado(index: number) {
    this.dados[index].bloqueado = !this.dados[index].bloqueado;
  }

  tresDeUnTipo() { const conteo: { [key: number]: number } = {};
   this.dados.forEach(dado => { conteo[dado.valor] = (conteo[dado.valor] || 0) + 1; });
    let tresDeUnTipo = false;
    this.dados.forEach(dado => { dado.marcado = conteo[dado.valor] >= 3;
    if (conteo[dado.valor] >= 3) { tresDeUnTipo = true; } });
    this.mensaje = tresDeUnTipo ? 'Tres de un tipo' : ''; 
  }
  
  CuatroDeUnTipo(){
    const conteo: {[key:number]: number}= {};
    this.dados.forEach(dado => {conteo[dado.valor] = (conteo[dado.valor]||0)+ 1});
    let cuatroDeUnTipo = false;
    this.dados.forEach(dado =>{dado.marcado = conteo[dado.valor]>=4;
    if(conteo[dado.valor]>=4) {cuatroDeUnTipo = true;}});
    this.mensaje = cuatroDeUnTipo ? 'cuatro de un tipo' : '';
  }

  //yatze(){
    //const conteo: {[key: number]: number}={};
    //this.dados.forEach(dado => {dado.marcado = conteo})
  //}
}
