import {Component, HostListener} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  newsItems: any[] = [];
  page = 1;
  pageSize = 10;
  loading = false;

  constructor(private newsService: NewsService) {}


  loadMore():void {
    if (this.loading) return;

    this.loading = true;
    this.newsService.getNews(this.page, this.pageSize).subscribe(data => {
      this.newsItems = [...this.newsItems, ...data.news];
      this.page++;
      this.loading = false;
    })
  }

  ngOnInit():void {
    this.loadMore();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const max = document.documentElement.scrollHeight;

    if (pos >= max) {
      this.loadMore();
    }
  }
}
