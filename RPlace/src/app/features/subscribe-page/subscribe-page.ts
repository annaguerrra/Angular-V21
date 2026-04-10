import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';
import { LoginDto, SubsDto } from '../../domain/UserInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-page',
  imports: [ReactiveFormsModule],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {

  constructor( 
    private api: AuthApi,
    private router: Router
  ) {}

  subsForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPass: new FormControl('', [Validators.required]),
  })

  
  get Username() {
    return this.subsForm.get('username')
  }

  get Password() {
    return this.subsForm.get('password')
  }

  get confirmPass() {
    return this.subsForm.get('confirmPass')
  }

  subs = () => {
    if(!this.subsForm.valid){
      alert("Nem todos os campos foram preenchidos");
      return
    }

    const data: SubsDto = {
      username: this.Username?.value,
      password: this.Password?.value,
      confirmPass: this.confirmPass?.value
    }

    this.api.ssubs(data).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['login'])        
      }
    );
  }

  
  
}
