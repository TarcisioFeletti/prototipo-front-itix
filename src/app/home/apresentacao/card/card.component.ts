import { Component, Input, OnInit } from '@angular/core';
import { CardHome } from 'src/app/model/card-home';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: CardHome = { titulo: '', texto: '' };

  constructor() {}

  ngOnInit(): void {}
}
