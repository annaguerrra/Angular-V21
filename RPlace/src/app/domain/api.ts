import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ng g service domain/api

@Injectable({
  providedIn: 'root',
})
export class Api {
  protected readonly URL: string = ""

  constructor( protected client: HttpClient){}
}
