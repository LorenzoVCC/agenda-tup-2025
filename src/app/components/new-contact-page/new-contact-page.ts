import { Component, inject, input, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../../services/contacts-service';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { NewContact } from '../../interfaces/contacto';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'new-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './new-contact-page.html',
  styleUrl: './new-contact-page.scss'
})

export class newContact {

  contactsService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;
  idContacto = input<string>();

  async createContact(form: NgForm) {
    this.errorEnBack = false;

    const newContact: NewContact = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      number: form.value.number,
      company: form.value.company,
      // description: form.value.description,
      image: form.value.image,
      isFavorite: false,
    }

    const res = await this.contactsService.createContact(newContact);
    if (!res) {
      this.errorEnBack = true;
      return
    };
    this.router.navigate(["/contacts", res.id]);
  }
}