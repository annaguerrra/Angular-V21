import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-pixel',
  templateUrl: './modal-pixel.html',
  styleUrl: './modal-pixel.css',
  imports: [],
})
export class ModalPixel {
  pixelMatriz: Pixel[] = [
    {id: 1, x: 2,y: 3, color: "Oi",userID: 1},
    {id: 2, x: 2,y: 3, color: "Oi",userID: 1},
    {id: 3, x: 2,y: 3, color: "Oi",userID: 1}
  ]
}
