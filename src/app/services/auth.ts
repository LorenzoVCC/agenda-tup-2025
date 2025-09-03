import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  logueado = true;

  desloguear(){
    this.logueado = false;
  }

  loguear(){
    this.logueado = true;
  }
}
