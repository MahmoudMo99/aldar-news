import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './news-details.html',
  styleUrl: './news-details.scss',
})
export class NewsDetails implements OnInit {
  newsTitle = '';
  newsContent = '';
  newsImage = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.newsTitle = 'هجوم صاروخي من بغداد';
    this.newsContent = `
      <p>وقع هجوم صاروخي جديد في العاصمة بغداد اليوم، مما أثار مخاوف أمنية جديدة...</p>
      <p><strong>التفاصيل لاحقًا في هذا التقرير.</strong></p>
    `;
    this.newsImage = './images/earth.jpg';
  }
}
