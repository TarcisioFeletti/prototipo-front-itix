import { Component, OnInit } from '@angular/core';
import { CardHome } from 'src/app/model/card-home';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss'],
})
export class ApresentacaoComponent implements OnInit {
  cards: CardHome[] = [
    {
      titulo: 'Desenvolvedor Java',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      titulo: 'Desenvolvedor Java',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      titulo: 'Desenvolvedor Java',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
