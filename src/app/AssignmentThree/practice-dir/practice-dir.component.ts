import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-dir',
  templateUrl: './practice-dir.component.html',
  styles: ['.fifTh{ color : white;}'],
})
export class PracticeDirComponent implements OnInit {
  numCount = 0;
  password = 'Tuna';
  passwordDisplay = false;
  numCountArray = [];
  constructor() {}
  addZero(i: number) {
    let j = '' + i;
    if (i < 10) {
      j = '0' + i;
    }
    return j;
  }
  ngOnInit() {}
  showPassword() {
    this.passwordDisplay = !this.passwordDisplay;
    this.numCount = this.numCount + 1;
    const d = new Date();
    let h = this.addZero(d.getHours());
    let m = this.addZero(d.getMinutes());
    let s = this.addZero(d.getSeconds());
    let time = h + ':' + m + ':' + s;
    this.numCountArray.push('clicked on: ' + time);
  }
}
