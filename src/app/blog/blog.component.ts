import { Component, OnInit } from '@angular/core';
import { CardBlog } from '../model/card-blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  cards: CardBlog[] = [
    {
      imagem: '../../../assets/images/cardBlog1.gif',
      titulo: 'Um título aleatório',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      imagem: '../../../assets/images/cardBlog2.jpg',
      titulo: 'Outro título aleatório',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      imagem: '../../../assets/images/cardBlog3.webp',
      titulo: 'Um título Genérico',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      imagem: '../../../assets/images/cardBlog1.png',
      titulo: 'Um título Genérico',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      imagem: '../../../assets/images/cardBlog2.png',
      titulo: 'Um título Genérico',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      imagem: '../../../assets/images/cardBlog3.png',
      titulo: 'Um título Genérico',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
    {
      imagem: '../../../assets/images/cardBlog1.gif',
      titulo: 'Um título Espetacular',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur officia laudantium, hic quod dolores excepturi iure repudiandae accusantium asperiores mollitia fuga. Culpa libero itaque nisi saepe numquam illo obcaecati.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
