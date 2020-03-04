import { Injectable } from '@angular/core';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { ForumThread } from 'src/models/entities/ForumThread';
import { MOCK_QUESTIONS } from './data/mock-questions';

@Injectable()
export class QuestionCrudInMemoryService
  extends CrudInMemoryService<ForumThread> {

  constructor() {
    super();
    this.items = MOCK_QUESTIONS.map(q => Object.assign(new ForumThread(), q));
  }
}
