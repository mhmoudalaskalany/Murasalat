import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toastCtr: ToastController) {}

  toasterShowDuration(message: string) {
    this.toastCtr
      .create({
        message: message,
        duration: 6000
      })
      .then(toaster => toaster.present());
  }
}
