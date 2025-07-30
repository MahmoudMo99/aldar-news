import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
