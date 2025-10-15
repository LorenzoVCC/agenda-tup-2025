import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  contactService = inject(ContactsService)
}
