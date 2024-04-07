import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() newNumber = new EventEmitter<number>();
  myInterval;
  gameStarted() {
    console.log('--------------');
    console.log('Game Started!!');
    this.myInterval = setInterval(() => {
      this.newNumber.emit(Math.trunc(Math.random() * 100));
    }, 1000);
  }
  stopGame() {
    console.log('Game Stopped!!');
    clearInterval(this.myInterval);
    console.log('--------------');
  }
}
