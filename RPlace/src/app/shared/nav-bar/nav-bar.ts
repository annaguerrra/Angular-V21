import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  public color2: string = ""
  @Output()
  public color : EventEmitter<string> = new EventEmitter();


  inputColor = (event: Event) => {
    const element = event.target as HTMLInputElement;
    this.color2 = element.value
    this.color.emit(element.value);
  }
}
