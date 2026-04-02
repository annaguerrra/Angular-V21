import { Component } from '@angular/core';
import { ModalPixel } from "./modal-pixel/modal-pixel";
import { MatrizPixel } from "./matriz-pixel/matriz-pixel";

@Component({
  selector: 'app-main-page',
  imports: [ModalPixel, MatrizPixel],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
