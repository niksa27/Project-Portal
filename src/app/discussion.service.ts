import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  public user : Observable<firebase.User>;
  public userDetails : firebase.User = null; 

  constructor(private af : AngularFireAuth, private router : Router) 
  { 
    this.user = af.authState;
    this.user.subscribe((user) => {
      if(user)
      {
        this.userDetails = user;
        console.log(this.userDetails);
      }
      else
      {
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle()
  {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  isLoggedIn()
  {
    if(this.userDetails == null)
    {
      return false;
    }
    else
    {
      return true;  
    }
  }

  logout()
  {
    this.af.auth.signOut();
  }
}

