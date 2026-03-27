import { Component, computed, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RPlace');
  protected _date = signal(new Date());

  protected _stringDate: Signal<string> = computed(() => {
    return `${
      this._date().getFullYear()} 
      - ${this._date().getMonth()} 
      - ${this._date().getDate()}`
  });
  
  addDay(add: boolean = true) {
    this._date.update((oldValue) => {
      let day = add ? oldValue.getDate() +1 :  oldValue.getDate() + -1;
      let month = oldValue.getMonth();
      let year = oldValue.getFullYear();

      return new Date(year, month, day);
    })
  }

  ngOnInit() {
    console.log(this.title()); // retorna o nome 'RPlace'
  }
}


