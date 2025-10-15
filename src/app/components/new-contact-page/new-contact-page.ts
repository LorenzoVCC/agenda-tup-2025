import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { ContactsService } from '../../services/contacts-service';
import { Contact, NewContact } from '../../interfaces/contacto';
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'new-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Spinner],
  templateUrl: './new-contact-page.html',
  styleUrl: './new-contact-page.scss'
})

export class newContact implements OnInit {

  contactsService = inject(ContactsService);
  router = inject(Router)
  
  errorEnBack = false;
  solicitudABackEnCurso = false;

  idContacto = input<string>();
  contactoBack: Contact | undefined = undefined;
  
  form = viewChild<NgForm>("newContactForm");

  async ngOnInit() {
    if (this.idContacto()) {
      
      const contacto: Contact | null = await this.contactsService.GetContactById(this.idContacto()!);
      console.log(contacto)

      if (contacto) {
        this.contactoBack = contacto;
        this.form()?.setValue({
          address: contacto.address,
          company: contacto.company,
          email: contacto.email,
          firstName: contacto.firstName,
          image: contacto.image,
          // isFavorite: contacto.isFavorite,
          lastName: contacto.lastName,
          number: contacto.number,
          description: contacto.description
        })
      }
    }
  }

  async handleFormSubmission(form: NgForm) {
    this.errorEnBack = false;
    const nuevoContacto: NewContact = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavorite: form.value.isFavorite,
      description: form.value.description
    }

    this.solicitudABackEnCurso = true;
    //////////////////
    let res;
    if (this.idContacto()) {
      res = await this.contactsService.editContact({ ...nuevoContacto, id: this.contactoBack!.id });
      this.router.navigate(["/"]);
    }
    else {
      res = await this.contactsService.createContact(nuevoContacto);
    }
    this.solicitudABackEnCurso = false;
    ///////////////////////
    if (!res) {
      this.errorEnBack = true;
      return
    };
    this.router.navigate(["/contacts", res.id]);
  }
}