import { Injectable } from '@angular/core';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { Question } from 'src/models/entities/Question';
import { MOCK_QUESTIONS } from './data/mock-questions';

@Injectable()
export class QuestionsCrudInMemoryService
  extends CrudInMemoryService<Question> {

  constructor() {
    super();
    this.items = MOCK_QUESTIONS;
  }
}
