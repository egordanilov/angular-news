import { Routes } from '@angular/router';
import {NewsListComponent} from "../pages/news-list/news-list.component";
import {NewsViewComponent} from "../pages/news-view/news-view.component";

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: NewsListComponent
  },
  {
    path: 'news/:slug', component: NewsViewComponent
  },
  {
    path: '**', redirectTo: ''
  },
];
