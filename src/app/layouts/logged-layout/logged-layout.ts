import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { ContactListPage } from '../../pages/contact-list-page/contact-list-page';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-logged-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Sidebar, Header, ContactListPage , RouterModule],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})

export class LoggedLayout {
  
}
