import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pixel } from './pixel/pixel';
import { NavBar } from "../../shared/nav-bar/nav-bar";

@Component({
  selector: 'app-main-page',
  imports: [Pixel, NavBar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  constructor( private api: AuthApi){}

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get Username() {
    return this.loginForm.get('username')
  }

  get Password() {
    return this.loginForm.get('password')
  }

  login = () => {
    
  }

  subscribe = () => {

  }
  
  Width: number[] = new Array(30)
  Height: number[] = new Array(30)

}
