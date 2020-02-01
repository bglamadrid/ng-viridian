import { NavItem } from './NavItem';

export const NAV_ITEMS: { [key: string]: NavItem } = {
  inicio: {
    path: 'inicio',
    text: 'Inicio',
    icon: 'home'
  },
  foro: {
    path: 'foro',
    text: 'Preguntas y Respuestas',
    icon: 'question_answer'
  },
  equipos: {
    path: 'equipos',
    text: 'Equipos',
    icon: 'devices'
  }
};
