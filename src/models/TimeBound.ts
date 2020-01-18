import { Time } from '@angular/common';
import { AbstractEntity } from './AbstractEntity';

export interface TimeBound
  extends AbstractEntity {

  date: Date;
  time?: Time;
}
