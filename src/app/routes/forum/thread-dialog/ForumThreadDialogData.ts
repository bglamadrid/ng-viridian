import { ForumService } from 'src/app/routes/forum/forum.service';
import { ForumThread } from 'src/data/models/entities/ForumThread';

export interface ForumThreadDialogData {
  svc: ForumService;
  question: ForumThread;
}
