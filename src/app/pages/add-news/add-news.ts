import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-news',
  imports: [CommonModule, RouterModule],
  templateUrl: './add-news.html',
  styleUrl: './add-news.scss',
})
export class AddNews {
  constructor() {}
  router = inject(Router);

  addNews() {
    this.router.navigate(['dashboard']);
  }
}
