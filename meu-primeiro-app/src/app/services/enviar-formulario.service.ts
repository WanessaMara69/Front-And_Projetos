import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarFormularioService {

  constructor() { }

  enviaFormulario(info: any){
    console.log("Enviando mensagem")
  }
}
