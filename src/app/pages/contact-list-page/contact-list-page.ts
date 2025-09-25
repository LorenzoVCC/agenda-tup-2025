import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
//import { Contact, NewContact } from '../../interfaces/contacto';
import { Auth } from '../../services/auth';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule,ContactListItem, FormsModule],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})

/////////////////////////////////////////////////////

// <button [disabled]="newContactForm.invalid">+</button>
export class ContactListPage implements OnInit {
  ngOnInit(): void {
    this.contactsService.getContacts();
  }

  authServicew = inject(Auth)
  contactsService = inject(ContactsService)

/*  createContact(form:any) {
    console.log(form)

  const newContact:NewContact = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      number: form.number,
      company: form.company,
      //description: form.description,
      image: form.image
    }
    this.contactsService.createContact(newContact)
  }
}*/}
