import { Injectable } from '@angular/core';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { Question } from 'src/models/entities/Question';
import { MOCK_QUESTIONS } from './data/mock-questions';

@Injectable()
export class QuestionCrudInMemoryService
  extends CrudInMemoryService<Question> {

  constructor() {
    super();
    this.items = MOCK_QUESTIONS.map(q => Object.assign(new Question(), q));
  }
}
