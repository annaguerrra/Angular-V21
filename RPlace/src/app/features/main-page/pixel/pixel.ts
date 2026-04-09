import { Component, Input, input, Output, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pixel',
  imports: [],
  templateUrl: './pixel.html',
  styleUrl: './pixel.css',
})
export class Pixel {
  @Input()
  Color: string = "#ffffff"

  @Output()
  onClick: EventEmitter<void> = new EventEmitter();

  clicked = () => {
    this.onClick.emit()
  }

}
