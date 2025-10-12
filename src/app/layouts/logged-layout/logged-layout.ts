import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { Spinner } from '../../components/spinner/spinner';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logged-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Sidebar, Header, RouterModule, Spinner],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})

export class LoggedLayout {
  authService = inject(Auth)
}
