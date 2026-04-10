import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../domain/UserInterface';
import { AuthApi } from '../../domain/auth.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
constructor( 
  private api: AuthApi,
   private router: Router
){}

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
      password: this.Password?.value
    }

    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res);
        this.router.navigate(['']) 
        // location.reload();
      }
    );
  }


  
}
