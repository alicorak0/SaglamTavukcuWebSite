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
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.6454332149992!2d27.172002907621497!3d39.110196889646915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba029d14ccf2c1%3A0xfd1bc2c4dce22546!2sMaltepe%2C%20Atat%C3%BCrk%20Blv.%2C%2035700%20Bergama%2F%C4%B0zmir!5e1!3m2!1str!2str!4v1770628944413!5m2!1str!2str" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
