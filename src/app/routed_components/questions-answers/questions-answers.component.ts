import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/models/entities/Question';
import { QuestionsGridComponent } from './questions-grid/questions-grid.component';

@Component({
  selector: 'app-qa',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.sass']
})
export class QuestionsAnswersComponent
  implements OnInit {

  public questions: Question[];

  @ViewChild('grid', { static: false }) public grid: QuestionsGridComponent;

  constructor() { }

  ngOnInit() {
  }

}
