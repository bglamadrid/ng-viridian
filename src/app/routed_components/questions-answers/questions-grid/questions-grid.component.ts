import { Component, OnInit, ViewChild } from '@angular/core';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { Question } from 'src/models/entities/Question';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-questions-grid',
  templateUrl: './questions-grid.component.html',
  styleUrls: [
    '../../../../assets/styles/data-grid.sass',
    './questions-grid.component.sass'
  ]
})
export class QuestionsGridComponent
  extends DataGridTemplateComponent<Question>
  implements OnInit {

  @ViewChild('table', { static: true }) public table: MatTable<Question>;
  public tableColumns: string[];

  constructor() {
    super();
    this.tableColumns = [ 'title', 'author', 'dateCreated', 'answersCount' ];
  }

  ngOnInit() {
  }

  public onClickView(q: Question) {
    alert(q.title);
    console.log(q);
  }

}
