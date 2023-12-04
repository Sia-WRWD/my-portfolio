import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactFormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.contactFormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.generateMailToLink();
    this.contactFormData.reset();
  }

  generateMailToLink() {
    const name = encodeURIComponent(this.contactFormData.get('Name').value);
    const email = encodeURIComponent(this.contactFormData.get('Email').value);
    const message = encodeURIComponent(this.contactFormData.get('Message').value);

    const mailtoLink = `mailto:cheezhensia24@gmail.com?subject=Inquiry%20from%20${name}&body=Dear%20Recipient,%0A%0AI%20am%20contacting%20you%20regarding:%0A%0A${message}.%0A%0AKind%20regards,%0A${name}%0A${email}`;

    window.location.href = mailtoLink;
  }
}
