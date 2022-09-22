import { Component, OnInit } from '@angular/core';
import { CardHome } from 'src/app/model/card-home';
import { ApresentacaoService } from './apresentacao.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss'],
})
export class ApresentacaoComponent implements OnInit {
  cards: CardHome[] = [];

  constructor(private service: ApresentacaoService) {}

  ngOnInit(): void {
    this.service.getCards().subscribe((cards) => (this.cards = cards));
  }
}
