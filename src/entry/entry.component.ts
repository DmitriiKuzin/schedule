import {Component, Input} from '@angular/core';

@Component({
  selector: 'entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent{
  @Input()
  time = '';

  @Input()
  discipline = '';
}
