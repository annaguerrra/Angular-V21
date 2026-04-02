import { Component } from '@angular/core';
import { ModalPixel } from "./modal-pixel/modal-pixel";

@Component({
  selector: 'app-main-page',
  imports: [ModalPixel],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
