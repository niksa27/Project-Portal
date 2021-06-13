import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import {AngularFire,AuthProviders,AuthMethods} from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(public afAuth: AngularFireAuth)
  { }

  doFacebookLogin(){
   return new Promise<any>((resolve, reject) => {
     let provider = new firebase.auth.FacebookAuthProvider();
     this.afAuth.auth
     .signInWithPopup(provider)
     .then(res => {
       resolve(res);
     }, err => {
       console.log(err);
       reject(err);
     })
   })
 }

 doTwitterLogin(){
   return new Promise<any>((resolve, reject) => {
     let provider = new firebase.auth.TwitterAuthProvider();
     this.afAuth.auth
     .signInWithPopup(provider)
     .then(res => {
       resolve(res);
     }, err => {
       console.log(err);
       reject(err);
     })
   })
 }

 doGoogleLogin(){
   return new Promise<any>((resolve, reject) => {
     let provider = new firebase.auth.GoogleAuthProvider();
     provider.addScope('profile');
     provider.addScope('email');
     this.afAuth.auth
     .signInWithPopup(provider)
     .then(res => {
       resolve(res);
     }, err => {
       console.log(err);
       reject(err);
     })
   })
 }

 doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
 }
 user :any;
 verified:boolean;
 emailverification(value)
 {
   this.user = firebase.auth().currentUser;
   this.user.sendEmailVerification().then(function() {
     window.alert("email sent");
     // Email sent.
   }).catch(function(error) {
     // An error happened.
   });
 }

 as:any;
 doLogin(value){
   
   //this.as=firebase.auth().currentUser.emailVerified;
   // window.alert(this.as);

  if(firebase.auth().currentUser.emailVerified)
  {
    //window.alert("hello");
    //if(firebase.auth().currentUser.emailVerified)
    //{ 
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
  else
  {
    window.alert("Verify the email");
  }
  //}//if
  //else
  //{
   // window.alert("first verify the email");
  //}
 }

 doLogout(){
   return new Promise((resolve, reject) => {
     if(firebase.auth().currentUser){
       this.afAuth.auth.signOut()
       resolve();
     }
     else{
       reject();
     }
   });
 }

}
