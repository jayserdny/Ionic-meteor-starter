import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertsProvider } from '../../providers/alerts/alerts';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private username: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(public navCtrl: NavController, 
              private alertsUtil: AlertsProvider, 
              private authUtil: AuthProvider ) {}

  /**
   * 
   * Method to register
   * 
   */
  private register(): void {

    this.authUtil.register(this.email, this.password, this.username, this.name).then(() => {
      this.alertsUtil.showAlert("Success!!!!")
      
    }, (error) => {
      this.alertsUtil.showAlert(error);
    })

  }

}
