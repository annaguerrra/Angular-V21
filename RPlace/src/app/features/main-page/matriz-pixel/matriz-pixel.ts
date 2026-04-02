import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz-pixel',
  imports: [],
  templateUrl: './matriz-pixel.html',
  styleUrl: './matriz-pixel.css',
})
export class MatrizPixel {
    pixelMatriz: Pixel[] = [
    {id: 1, x: 2,y: 3, color: "Oi",userID: 1},
    {id: 2, x: 2,y: 3, color: "Oi",userID: 1},
    {id: 3, x: 2,y: 3, color: "Oi",userID: 1}
  ]

}
