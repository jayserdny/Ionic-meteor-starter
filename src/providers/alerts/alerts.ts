import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertsProvider {

  constructor(private alertCtrl: AlertController, public toastCtrl: ToastController) {}

  /**
   * Method to present alert with error or message
   *
   * @param {any} msg: alert
   */
  public showAlert(msg): void {

    const alert = this.alertCtrl.create({
      buttons: ['OK'],
      message: msg || msg.message,
      title: 'Oops!'
    });
 
    alert.present();
  }

  /**
   * Method to present toast with error or message
   *
   * @param {any} msg: alert
   */
  public presentToast(msg: any): void {

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000
    });

    toast.present();
  }

}
