import {Guid} from 'guid-typescript';

export class Entry{
  id =  Guid.create();
  time = '';
  discipline = '';
}
