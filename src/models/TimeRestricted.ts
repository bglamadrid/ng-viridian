import { Time } from '@angular/common';
import { AbstractEntity } from './AbstractEntity';

export interface TimeRestricted
  extends AbstractEntity {
  date: Date;
  time?: Time;
}
