import { Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  /** Lista de contactos en memoria */
  contactos:Contact[] = [
    {
    firstName: 'Gonzalo',
    lastName: 'Bechara',
    address: 'San Lorenzo',
    email: 'gbechara@austral.edu.ar',
    number: '123456',
    company: 'Austral',
    id: 0,
    isFavorite: false,
    description: 'Hola',
    image: ''
  }
  ];

  /** Crea un contacto */
  createContact(nuevoContacto:NewContact){
    const contacto:Contact = {
      ...nuevoContacto,
      id: Math.random(),
      isFavorite: false
    }

    this.contactos.push(contacto)
  }

  /** Elimina un contacto segun su ID */
  deleteContact(id:number){
    this.contactos = this.contactos.filter(contacto => contacto.id !== id);
  }

  editContact(){}

  /** Obtiene los contactos del backend */
  getContacts(){}
  
}

