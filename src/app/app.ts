import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Footer, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('aldar-news');
}
