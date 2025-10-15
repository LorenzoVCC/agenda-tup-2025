import { inject, Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contacto';
import { Auth } from './auth';


@Injectable({ providedIn: 'root' })

export class ContactsService {
  authservice = inject(Auth);
  readonly URL_BASE = "https://agenda-api.somee.com/api/Contacts";

  contactos: Contact[] = [];

  /** Crea un contacto */
  async createContact(nuevoContacto: NewContact) {
    const res = await fetch(this.URL_BASE,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.authservice.token,
        },
        body: JSON.stringify(nuevoContacto)
      });
    if (!res.ok) return;
    const resContact: Contact = await res.json();
    this.contactos.push(resContact)
    return resContact;
  }

  /** Elimina un contacto segun su ID */
  async deleteContact(id: number) {
    const res = await fetch(this.URL_BASE + "/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + this.authservice.token,
        },
      });
    if (!res.ok) return;
    this.contactos = this.contactos.filter(contact => contact.id !== id);
    return true;
  }

  async editContact(contact: Contact) {
    const res = await fetch(this.URL_BASE + "/" + contact.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.authservice.token,
        },
        body: JSON.stringify(contact)
      });

    if (!res.ok) return;

    this.contactos = this.contactos.map(oldContact => {
      if (oldContact.id === contact.id) return contact;
      return oldContact
    })
    return contact;
  }

  /** Obtiene los contactos del backend */
  async getContacts(search: string = "") {
    const res = await fetch(this.URL_BASE,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.authservice.token
        }
      })
    if (res.ok) {
      const resJson: Contact[] = await res.json()
      if (search)
      {
        this.contactos = resJson.filter(c => c.firstName.startsWith(search));
      }
      else
      {
        this.contactos = resJson
      }
    }
  }

  async GetById(id: number, userId: Number) {
    const res = await fetch(`${this.URL_BASE}/${id}?userId=${userId}`, {
      headers: { Authorization: 'Bearer ' + this.authservice.token }
    });
    if (!res.ok) return null;
    return await res.json();
  }

  async GetContactById(id: string | number) {
    const res = await fetch(this.URL_BASE + "/" + id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.authservice.token
        }
      })
    if (res.ok) {
      const resJson: Contact = await res.json()
      return resJson;
    }
    return null;
  }

  async setFavourite(id: string | number) {
    const res = await fetch(this.URL_BASE + "/" + id + "/favorite",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.authservice.token,
        },
      })
    if (!res.ok) return;

    this.contactos = this.contactos.map(contacto => {
      if (contacto.id === id) {
        return { ...contacto, isFavorite: !contacto.isFavorite };
      };
      return contacto;
    });
    return true;
  }
}