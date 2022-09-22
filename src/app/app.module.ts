import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './home/apresentacao/card/card.component';
import { CardBlogComponent } from './blog/card-blog/card-blog.component';
import { ApresentacaoComponent } from './home/apresentacao/apresentacao.component';
import { ContatoComponent } from './home/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardBlogComponent,
    ApresentacaoComponent,
    ContatoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
