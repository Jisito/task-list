import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent {
  boton: string = 'Click';

  /* Entradas */
  @Input() text: string = '';
  @Input() color: string = '';
  /* Salidas */

  @Output() btnClick=new EventEmitter();

  constructor() {}
  onClick() {
    console.log('Hellow');
    this.btnClick.emit();
    
  }
}
