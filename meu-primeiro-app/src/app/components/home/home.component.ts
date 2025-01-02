import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviarFormularioService } from '../../services/enviar-formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviarFormularioService);
  mostrarTitulo = false;
  name = "Wanessa";

  listaItens = ["teste01", "teste02", "teste03"];

  @Input() deFora!: string;

  @Output() emitindoValor = new EventEmitter<string>();


  submit(){
    this.emitindoValor.emit(this.name);
    this.enviaFormularioService.enviaFormulario("enviando mensagem")

  }

}
