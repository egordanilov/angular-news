import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-news-list-item',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './news-list-item.component.html',
  styleUrl: './news-list-item.component.css'
})
export class NewsListItemComponent {
  @Input() titleImageUrl?: string;
  @Input() title: string = '';
  @Input() publishedDate: string = '';
}
