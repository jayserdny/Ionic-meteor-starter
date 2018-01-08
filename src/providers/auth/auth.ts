import { Injectable } from '@angular/core';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  /**
   *
   * Method to login using email and password.
   *
   * @param {string} email: Email of the user trying to login.
   * @param {string} password: Password of the user to login.
   *
   */
  login(email: string, password: string): Promise<void> {

  	return new Promise<void>((resolve, reject) => {

      Meteor.loginWithPassword(email, password, (e: Error) => {

        if (e) return reject(e);

        resolve();

      });
    });
  }

  /**
   *
   * Method to register new user
   *
   * @param {string} email: Email of the user trying to login.
   * @param {string} password: Password of the user to login.
   * @param {string} username: Username of the user.
   * @param {string} name: Name of the user,
   *
   */
  register(email: string, password: string, username: string, name: string): Promise<void> {

    let userData = {
      username: username,
      email: email,
      password: password,
      profile: {
        name: name
      }
    };
    return new Promise<void>((resolve, reject) => {

      Accounts.createUser(userData, (e: Error) => {
  
        if (e) return reject(e);

        resolve();
  
      });
    });
  }
  
  

}
