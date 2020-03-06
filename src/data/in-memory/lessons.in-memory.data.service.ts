import { Injectable } from '@angular/core';
import { InMemoryDataService } from './.in-memory.data.service';
import { Lesson } from 'src/models/entities/Lesson';

export const MOCK_LESSONS: Partial<Lesson>[] = [
  {
    id: 1,
    date: new Date('2020-01-16T19:33'),
    author: { id: 1, name: 'Elias58' },
    title: 'Audacity',
    images: [ { url: 'assets/img/Audacity_Logo.svg.png' } ],
    resume: 'Audacity es una aplicación multiplataforma gratuita, que sirve para grabar y editar pistas de audio.',
    content: 'Audacity es una aplicación multiplataforma gratuita, que sirve para grabar y editar pistas de audio.\n' +
      'Este actualmente cuenta con soporte de idioma 100% en español.\n\n' +
      'Sus principales funcionalidades y caracteristicas son:\n' +
        '  Grabación de audio en tiempo real.\n' +
        '  Edición archivos de audio tipo MP3, WAV, Ogg Vorbis, y muchos otros.\n' +
        '  Conversión entre formatos de tipo audio.\n' +
        '  Importación de archivos MIDI, RAW, y otros.\n' +
        '  Edición de pistas múltiples.\n' +
        '  Generación y síntesis de audio.\n' +
        '  Aplicación de efectos de sonido (eco, inversión, tono, etc).\n' +
        '  Integración a plug-ins y complementos.\n\n' +
      'El formato de la unidad para impartir este programa a nivel introductorio basico cuenta de 4 sesiones de 1 hora pedagógica cada una.\n\n' +
      'Estas se dividen en:\n' +
        '  1) Presentación del programa, manejo teórico y primer contacto\n' +
        '  2) Herramientas del programa y primer proyecto\n' +
        '  3) Edición de proyecto de audio\n' +
        '  4) Presentación del proyecto\n\n' +
      'El objetivo de la unidad es que los estudiantes sean capaces de utilizar de forma básica una herramienta digital para la producción de materal auditivo con el fin de perfimitir el fortalecimiento de los proyectos fonográficos que se desarrollaran más adelante en el año escolar.'
  }
];

@Injectable()
export class LessonsInMemoryDataService
  extends InMemoryDataService<Lesson> {

  constructor() {
    super();
    this.items = MOCK_LESSONS.map(u => Object.assign(new Lesson(), u));
  }
}
