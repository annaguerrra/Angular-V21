import { Component } from '@angular/core';
import { ModalPixel } from "./modal-pixel/modal-pixel";
import { MatrizPixel } from "./matriz-pixel/matriz-pixel";
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  imports: [ModalPixel, MatrizPixel],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  constructor( private api: AuthApi){}

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  login = () => {

  }

  subscribe = () => {

  }

}
