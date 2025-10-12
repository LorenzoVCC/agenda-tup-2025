import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Spinner } from "../../components/spinner/spinner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Spinner],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})

export class LoginPage {
  authservice = inject(Auth)
  router = inject(Router)
  solicitudABackEnCurso = false;

  errorlogin = false;

  async login(form:NgForm)
  {
    console.log(form.value)
    this.errorlogin = false;
    if (!form.value.email || !form.value.password)
    {
      this.errorlogin = true;
      return
    }
    this.solicitudABackEnCurso = true;
    const loginResult = await this.authservice.login(form.value);
    this.solicitudABackEnCurso = false;
    if (loginResult) this.router.navigate(["/"]);
    this.errorlogin = true;
  }
}
