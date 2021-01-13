import { Component } from '@angular/core';
import {DayComponent} from '../day/day.component';
import {Day} from '../day/day.viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
sas = new Array<Day>();
constructor() {
  this.sas.push(new Day('Понедельник'));
  this.sas.push(new Day('Вторник'));
  this.sas.push(new Day('Среда'));
  this.sas.push(new Day('Четверг'));
  this.sas.push(new Day('Пятница'));
  this.sas.push(new Day('Суббота'));

}

}
