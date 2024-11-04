import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class dadoComponent {
  @Input() valor: number = 1;
  @Input() bloqueado: boolean = false;
  @Input() marcado: boolean = false;
  @Output() girar = new EventEmitter<void>();
  @Output() bloquear = new EventEmitter<void>();

  girarDado() {
    this.girar.emit();
  }

  bloquearDado() {
    this.bloquear.emit();
  }
}
