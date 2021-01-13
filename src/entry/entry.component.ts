import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Guid} from "guid-typescript";

@Component({
  selector: 'entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent{
  @Output()
  deleteEntry = new EventEmitter();

  @Input()
  time = '';

  @Input()
  discipline = '';

  @Input()
  id = Guid.create();

  @Input()
  isEditing = false;
}
