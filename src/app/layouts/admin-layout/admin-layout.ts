import { Component } from '@angular/core';
import { AdminHeader } from '../../core/admin-header/admin-header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, AdminHeader],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {}
