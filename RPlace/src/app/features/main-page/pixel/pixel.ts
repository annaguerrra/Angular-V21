import { Component, Input, input, Output, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pixel',
  imports: [],
  templateUrl: './pixel.html',
  styleUrl: './pixel.css',
})
export class Pixel {
  pixelColor: string = "#ffffff"

  @Input()
  Color: string = "#ffffff"

  clicked = () => {
    this.pixelColor = this.Color;
  }

}
