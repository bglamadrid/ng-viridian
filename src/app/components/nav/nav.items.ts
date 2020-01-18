import { NavItem } from './NavItem';

export const NAV_ITEMS: { [key: string]: NavItem } = {
  dashboard: {
    path: 'home',
    text: 'Inicio',
    icon: 'home'
  },
  users: {
    path: 'questions',
    text: 'Preguntas',
    icon: 'question_answer'
  }
};
