import { Component, Input, OnInit } from '@angular/core';
import { CardBlog } from 'src/app/model/card-blog';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent implements OnInit {
  @Input() card: CardBlog = { imagem: '', titulo: '', texto: '' };

  ngOnInit(): void {}

  constructor() {}
}
