import { Component } from '@angular/core';
import { About } from "../../components/about/about";
import { News } from "../../components/news/news";
import { LeftNews } from "../../components/left-news/left-news";

@Component({
  selector: 'app-home',
  imports: [About, News, LeftNews],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
