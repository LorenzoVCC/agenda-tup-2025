import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contacto';
import { ContactsService } from '../../services/contacts-service';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Toast } from '../../utils/modals';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  // contacto = input.required<string>();
  index = input.required<number>();
  contacto = input.required<Contact>();
  contactService = inject(ContactsService);
  router = inject(Router);

   showDeleteModal(){
    Swal.fire({
      title: "Borrar contacto",
      text: "El borrado es permanente. ¿Está seguro?",
      showDenyButton: false,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "red",
      cancelButtonText: "Cancelar",
      confirmButtonText: `Borrar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.contactService.deleteContact(this.contacto().id).then(res =>{
          if(res){
            Toast.fire({
              icon: "success",
              title: "Contacto eliminado"
            });
          }
        })
      } 
      this.router.navigate(["/"]);
    });
  }
}
