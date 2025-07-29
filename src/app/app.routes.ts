import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewsDetails } from './pages/news-details/news-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'news/:id', component: NewsDetails },
];
