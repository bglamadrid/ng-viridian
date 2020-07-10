import { Injectable } from '@angular/core';
import { InMemoryDataService } from './.in-memory.data.service';
import { ForumThread } from 'src/data/models/entities/ForumThread';

export const MOCK_QUESTIONS: Partial<ForumThread>[] = [
  {
    id: 1,
    date: new Date('2020-01-16T19:33'),
    author: { id: 1, name: 'Elias58' },
    title: '¿Qué necesito saber para reemplazar mi procesador?',
    content: 'Poseo una placa madre algo antigua, usa un procesador Intel Pentium IV. Quisiera saber, ¿qué necesito para reemplazarlo por un procesador más moderno?',
    answers: [
      {
        id: 1,
        author: { id: 2, name: 'ElNotario' },
        date: new Date('2020-01-18T08:34'),
        content: 'Puedes averiguar las interfaces de procesador soportadas por tu placa madre (como los LGA1555), y buscar procesadores que implementen esa interfaz (como algunos Intel Core para la ya mencionada).',
        votes: 1,
        accepted: true
      }
    ]
  }, {
    id: 2,
    date: new Date('2020-01-16T13:20'),
    author: { id: 7, name: 'PabloAguilar' },
    title: '¿Merece la pena reemplazar mi tarjeta gráfica?',
    content: 'Buenas tardes. Mi placa madre es algo antigua, usa una interfaz de video PCI (no PCI-Express), pero son algo caras y me han dicho que no reciben soporte en caso de fallas. ¿Es esto cierto? ¿Merece la pena esperar un poco para invertir mejor?',
    answers: [ ]
  }, {
    id: 3,
    date: new Date('2020-01-24T09:43'),
    author: { id: 9, name: 'CabezaDeRadio' },
    title: '¿Cómo aplico pasta térmica en mi procesador?',
    content: 'Creo que llevo dos años sin aplicar pasta termica al procesa, como lo hago?',
    answers: [
      {
        id: 2,
        author: { id: 6, name: 'SrMuerte' },
        date: new Date('2020-01-18T08:34'),
        content: 'Hay muchas maneras de aplicarla, lo importante es que no excedas la cantidad; sólo debe cubrir la superficie del procesador, una capa fina está bien.\nSi necesitas referencias puedes ver este video:\nhttps://www.youtube.com/watch?v=Gsm02mt30vU',
        votes: 1,
        accepted: true
      }
    ]
  }
];

@Injectable()
export class ForumInMemoryDataService
  extends InMemoryDataService<ForumThread> {

  constructor() {
    super();
    this.items = MOCK_QUESTIONS.map(q => Object.assign(new ForumThread(), q));
  }
}
