import { Component, OnInit } from '@angular/core';

import {AuthenService} from '../authen.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  user:any='';
  constructor(
    public authService: AuthenService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/projects']);
    })
  }
/*
  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }*/

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/projects']);
    })
  }

  tryLogin(value){
    
    this.authService.doLogin(value)
    .then(res => {
      //this.router.navigate(['/user']);
      window.alert("login successful");
     // user.isEmailVerified();
      this.router.navigate(['/projects']);
   
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
