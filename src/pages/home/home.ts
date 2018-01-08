import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tracker } from 'meteor/tracker';

// Import this module
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private currentName: string;
  private serverResults: string;
  private currentUser: string;
  autorunComputation: Tracker.Computation;

  constructor(public navCtrl: NavController, private zone: NgZone) {

    this._initAutorun();
    
  }

  _initAutorun(): void {
    this.autorunComputation = Tracker.autorun(() => {

      this.zone.run(() => {

       
        if (Meteor.user()) { 
          this.currentUser = Meteor.user().profile.name
          
        }
        else {
          this.currentUser = "Not Logged In!"
 
        }
        
      })
    });
  }

  private openPage(s: string) {
    this.navCtrl.push(s);
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
