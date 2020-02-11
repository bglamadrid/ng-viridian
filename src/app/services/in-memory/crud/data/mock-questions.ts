import { Question } from 'src/models/entities/Question';

export const MOCK_QUESTIONS: Partial<Question>[] = [
  {
    id: null,
    date: new Date('2020-01-16T19:33'),
    author: { id: 1, name: 'Elias58' },
    title: '¿Cómo reemplazar mi procesador?',
    content: 'Poseo una placa madre algo antigua, usa un procesador Intel Pentium IV. Quisiera saber, ¿qué necesito para reemplazarlo por un procesador más moderno?',
    answers: [
      {
        id: null,
        author: { id: 2, name: 'El420MeMantienePoderoso' },
        date: new Date('2020-01-18T08:34'),
        content: 'Puedes averiguar las interfaces de procesador soportadas por tu placa madre (como los LGA1555), y buscar procesadores que implementen esa interfaz (como algunos Intel Core para la ya mencionada).',
        votes: 1,
        accepted: true
      }
    ]
  }
];
