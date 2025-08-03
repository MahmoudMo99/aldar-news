import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewsDetails } from './pages/news-details/news-details';
import { Dashboard } from './pages/dashboard/dashboard';
import { UserLayout } from './layouts/user-layout/user-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { AddNews } from './pages/add-news/add-news';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: UserLayout,
    children: [
      { path: 'home', component: Home },
      { path: 'news/:id', component: NewsDetails },
    ],
  },

  {
    path: 'dashboard',
    component: AdminLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'add-new', component: AddNews },
    ],
  },
];
