import { ForumService } from 'src/app/forum/forum.service';
import { ForumThread } from 'src/models/entities/ForumThread';

export interface ForumThreadDialogData {
  svc: ForumService;
  question: ForumThread;
}
