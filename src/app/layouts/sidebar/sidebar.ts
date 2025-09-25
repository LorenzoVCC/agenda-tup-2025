import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  private auth = inject(Auth);
  private router = inject(Router);

    logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}