import { Component, OnInit } from '@angular/core';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { Question } from 'src/models/entities/Question';
import { QuestionItem } from 'src/models/items/QuestionItem';

@Component({
  selector: 'app-questions-grid',
  templateUrl: './questions-grid.component.html',
  styleUrls: ['./questions-grid.component.sass']
})
export class QuestionsGridComponent
  extends DataGridTemplateComponent<QuestionItem>
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
