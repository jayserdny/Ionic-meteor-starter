import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertsProvider } from '../../providers/alerts/alerts';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private alertsUtil: AlertsProvider, 
              private authUtil: AuthProvider) {}

          
  /**
   * 
   * Method to do login
   * 
   */
  private login(): void {

    this.authUtil.login(this.email, this.password).then(() => {

      this.alertsUtil.presentToast(Meteor.user().profile.name);

    }, (error) => {

      this.alertsUtil.showAlert(error);
    })
 
  }

}
