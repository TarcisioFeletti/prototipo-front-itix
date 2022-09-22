import { Component, OnInit } from '@angular/core';
import { CardBlog } from '../model/card-blog';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  cards: CardBlog[] = [];

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getCards().subscribe((cards) => (this.cards = cards));
  }
}
