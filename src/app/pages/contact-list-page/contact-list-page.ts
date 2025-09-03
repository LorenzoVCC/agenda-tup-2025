import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact } from '../../interfaces/contacto';
import { Auth } from '../../services/auth';
import { Contacts } from '../../services/contacts';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage {
  contactService = inject(Contacts);
  authService = inject(Auth);

  contactos:Contact[] = [{
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
  ]
  
}
