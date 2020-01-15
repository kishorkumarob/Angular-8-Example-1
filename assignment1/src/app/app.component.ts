import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  state = false;
  flag = true;


  resetName() {
    this.name='';
  }

  checkName() {
    if(this.name == '') {
      this.state = true;
      return this.state;
    }
  }

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if(this.flag == true) {
      return 'green';
    } else {
      return 'red';
    }
  }

  studentList = ['Anoop', 'Deepa', 'Rahul'];
  currentName = '';

  add() {
    this.studentList.push(this.currentName);
  }

  paragraphState = true;
  buttonClicks = [];

  toggleParagraph() {
    this.paragraphState = !this.paragraphState;
    this.buttonClicks.push(this.buttonClicks.length + 1)
  }

  getLength() {
    if(this.buttonClicks.length > 4) {
      return 'blue';
    } else {
      return 'black';
    }
  }

}
