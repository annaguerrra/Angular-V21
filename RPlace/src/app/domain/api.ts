import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ng g service domain/api

@Injectable({
  providedIn: 'root',
})
export class Api {
  protected readonly URL: string = "http://10.234.197.18:5294/api"

  constructor( protected client: HttpClient){}
}
