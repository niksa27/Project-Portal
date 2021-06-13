import { Component, OnInit } from '@angular/core';
//import { AuthService } from './auth.service';
import {DiscussionService} from '../discussion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

interface chat
{
  name : string;
  msg : string;
  dateTime : number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'app';

  static i : number = 1;
  itemCollection : AngularFirestoreCollection<chat>;
  items : Observable<chat[]>;
  dateTime : number;
  name : string = '';
  msg : string = '';
  check : boolean = true;

  constructor(private authService : DiscussionService, public db : AngularFirestore)
  {
    
  }

  ngOnInit()
  {
    this.itemCollection = this.db.collection('messages')
    this.items = this.itemCollection.valueChanges();
  }
 
  loadedFeature = 'project';    //If nothing is click then display project component

  onNavigate(feature: string) 
  {
    this.loadedFeature = feature;
  }
  
  signInWithGoogle()
  {
    this.authService.signInWithGoogle();
    this.name = this.authService.userDetails.displayName;
    this.check = false;
  }

  chatSend(msg : string)
  {
    //this.name = this.authService.userDetails.displayName;
   // this.check = false;
    this.dateTime = Date.now();
    this.db.collection('messages').doc(ChatComponent.i.toString()).set({'name' : this.name, 'msg' : msg, 'dateTime' : this.dateTime});
    ChatComponent.i++;
    this.msg = '';
  }  

  logout()
  {
    this.authService.logout();
    if(this.authService.isLoggedIn() == false)
    {
      this.name = '';
    }
  }

}


