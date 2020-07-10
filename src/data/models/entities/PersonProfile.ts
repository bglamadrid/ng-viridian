import { AbstractEntity } from '../AbstractEntity';
import { Descriptable } from '../Descriptable';

export class PersonProfile
  extends AbstractEntity {

  public fullName: string;
  public idNumber: string;
  public address: string;
  public email: string;
  public phones: string[];
  public country: Descriptable;
}
