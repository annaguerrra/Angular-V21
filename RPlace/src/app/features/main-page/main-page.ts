import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pixel } from './pixel/pixel';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { LoginDto } from '../../domain/UserInterface';
import { AuthApi } from '../../domain/auth.api';

@Component({
  selector: 'app-main-page',
  imports: [Pixel, NavBar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  Width: number[] = new Array(30)
  Height: number[] = new Array(30)
  
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
    if(!this.loginForm.valid){
      alert("Nem todos os campos foram preenchidos");
      return
    }

    const data: LoginDto = {
      username: this.Username?.value,
      password: this.Password?.value,
    }

    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res);
        location.reload();
      }
    );
  }

  subscribe = () => {
    if(!this.loginForm.valid){
      alert("Nem todos os campos foram preenchidos");
      return
  }

  }
}
