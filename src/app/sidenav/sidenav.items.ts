import { SidenavItem } from './SidenavItem';

export const SIDENAV_ITEMS: { [key: string]: SidenavItem } = {
  inicio: {
    path: 'inicio',
    text: 'Inicio',
    icon: 'home'
  },
  foro: {
    path: 'foro',
    text: 'Preguntas y Respuestas',
    icon: 'question_answer',
    fontSize: '1rem'
  },
  equipos: {
    path: 'equipos',
    text: 'Equipos',
    icon: 'devices'
  },
  clases: {
    path: 'clases',
    text: 'Clases TIC 2.0',
    icon: 'school'
  }
};
