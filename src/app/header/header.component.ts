import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() trocaPagina: EventEmitter<number> = new EventEmitter();
  pagina: number = 0;

  constructor() {}

  ngOnInit(): void {}

  trocarPagina(valor: number) {
    this.pagina = valor;
    this.trocaPagina.emit(valor);
  }
}
