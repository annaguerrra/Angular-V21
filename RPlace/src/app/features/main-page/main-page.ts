import { Component, Input } from '@angular/core';
import { Pixel } from './pixel/pixel';
import { NavBar } from "../../shared/nav-bar/nav-bar";


@Component({
  selector: 'app-main-page',
  imports: [Pixel, NavBar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  Width: number[] = new Array(30)
  Height: number[] = new Array(30)

  selectedColor : string = ""

  setColor = (color: string) => {
    this.selectedColor = color;
  }
}
