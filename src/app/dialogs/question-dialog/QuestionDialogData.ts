import { QuestionsAnswersService } from 'src/app/routed_components/questions-answers/questions-answers.service';
import { Question } from 'src/models/entities/Question';

export interface QuestionDialogData {
  svc: QuestionsAnswersService;
  question: Question;
}
