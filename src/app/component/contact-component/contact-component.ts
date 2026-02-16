import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {

  googleMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1910.708464691042!2d27.17085770710198!3d39.110307662699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba03a693b44cd3%3A0x6d3fe5b29657a201!2zU2HEn2xhbW_En2x1IFRhdnVrw6d1bHVr!5e1!3m2!1str!2str!4v1771270231178!5m2!1str!2str" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
