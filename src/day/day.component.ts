import {Component, Input} from '@angular/core';
import {Entry} from '../entry/entry';

@Component({
    selector: 'day',
    templateUrl: 'day.component.html'
})

export class DayComponent {
  @Input()
  title = '';

  entries = new Array<Entry>();

  constructor() {
    this.entries.push({time: '15:50', discipline: 'МПИАП'} as Entry);
    this.entries.push({time: '16:50', discipline: 'СИИ'} as Entry);
    this.entries.push({time: '17:50', discipline: 'СААС'} as Entry);

  }
}
