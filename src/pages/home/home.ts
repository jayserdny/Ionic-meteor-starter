import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import this module
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private currentName: string;
  private serverResults: string;

  constructor(public navCtrl: NavController) {

  }

  callServer(): void {
    // Call Meteor
    Meteor.call('cutenessLevel', this.currentName, (error, results) => {

      if (!error) {
        this.serverResults = results;
      }

      else {
        console.log(error);
      }

    });
  }

}
