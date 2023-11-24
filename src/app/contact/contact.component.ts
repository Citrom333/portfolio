import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private http: HttpClient) {

  }
  onEmailSend(email: { senderMail: string, subject: string, message: string }) {
    console.log(email);
    const requestBody: any = { subject: email.subject, text: `${email.message} FROM ${email.senderMail}` };
    console.log(requestBody);
    this.http.post("/api/send-email", requestBody)
      .subscribe({
        next: response => {
          console.log('Sikeres POST kérés:', response);
        },
        error: error => {
          console.error('Hiba a POST kérés során:', error);
        }
      });
  }
}
