import { inject, Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contacto';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  authservice = inject(Auth);

  readonly URL_BASE = "https://agenda-api.somee.com/api/Contacts";
  /** Lista de contactos en memoria */
  contactos:Contact[] = [];

  /** Crea un contacto */
  async createContact(nuevoContacto:NewContact){
    const res = await fetch(this.URL_BASE,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer "+this.authservice.token,
      },
      body: JSON.stringify(nuevoContacto)
    });
  if (!res.ok) return;
  const resContact:Contact = await res.json();
  this.contactos.push(resContact)
  return resContact;
  }

  /** Elimina un contacto segun su ID */
  deleteContact(id:number){
    this.contactos = this.contactos.filter(c => c.id !== id);
  }

  editContact(){}

  /** Obtiene los contactos del backend */
  async getContacts(){
      const res = await fetch('https://agenda-api.somee.com/api/Contacts',
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + this.authservice.token 
        }
      })

      if(res.ok){   
        const resJson:Contact[] = await res.json()
        this.contactos = resJson;  
    }
  }
}