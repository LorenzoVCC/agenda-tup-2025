import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class Contacts {
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
  }];

createContact()
{
  this.contactos.push({
    id: 1,
    firstName: 'aa',
    lastName: 'bb',
    address: '',
    email: '',
    number: '',
    company: '',
    isFavorite: false,
    description: '',
    image: ''
  })
}


deleteContact(id:number){
  this.contactos = this.contactos.filter(contacto => contacto.id !== id);
}

  editContact(){}

  getContacts(){}
  
}

  
