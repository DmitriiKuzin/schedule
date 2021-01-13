import {Component, Input} from '@angular/core';
import {Entry} from '../entry/entry';
import { Guid } from 'guid-typescript';


@Component({
    selector: 'day',
    templateUrl: 'day.component.html'
})

export class DayComponent {
  showAddRow = false;

  entryTime = '';
  entryDescipline = '';

  isEditing = false;

  @Input()
  title = '';

  entries = new Array<Entry>();

  constructor() {
    this.entries.push({id: Guid.create(), time: '15:50', discipline: 'МПИАП'} as Entry);
    this.entries.push({time: '16:50', discipline: 'СИИ'} as Entry);
    this.entries.push({time: '17:50', discipline: 'СААС'} as Entry);
  }
  add(): void {
    this.showAddRow = true;
  }

  accept(): void{
    this.entries.push({time: this.entryTime, discipline: this.entryDescipline} as Entry);
    this.entryTime = '';
    this.entryDescipline = '';
    this.showAddRow = false;
  }

  cancel(): void{
    this.showAddRow = false;
  }

  sas(id: Guid): void {
    this.entries = this.entries.filter(x => x.id !== id);
  }
}
