import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cronograma.component.html',
  styleUrl: './cronograma.component.scss'
})
export class CronogramaComponent {

  programa24: any = [
    { titulo: "PANEL DE SABIDURÍAS ANCESTRALES E INDÍGENAS EN EL MUNDO DE LA INTELIGENCIA ARTIFICIAL.", hora: "17:00", fecha: "2024-04-24T17:00:00-04:00" },
    { titulo: "INAUGURACION. Puesta en escena artística “MarIA ya está aquí, entre la inteligencia ancestral y la inteligencia artificial”. Inauguración.", hora: "19:00", fecha: "2024-04-24T19:00:00-04:00" }
  ]
  programa25: any = [
    { titulo: "LA MUSICA NOS UNE. Video clip enganchado de canciones del mundo (mientras se acomoda el público)", hora: "8:30", fecha: "2024-04-25T08:30:00-04:00", horaTimeStamp: 1816700000000 },
    { titulo: "DINAMICA DE ARRANQUE", hora: "8:45", fecha: "2024-04-25T08:45:00-04:00", horaTimeStamp: 1816701500000 },
    { titulo: "Diálogo de cosmovisiones, interculturalidad y tecnología. Sabidurías ancestrales e indígenas en el mundo de la inteligencia artificial.", expositor: "MARCIA MANDEPORA (BOLIVIA)", hora: "9:00", fecha: "2024-04-25T09:00:00-04:00", horaTimeStamp: 1816703000000 },
    { titulo: "¿Cuál puede ser el aporte de los pueblos indígenas a la revolución tecnológica?. Sabidurías ancestrales e indígenas en el mundo de la inteligencia artificial.", expositor: "ENRIQUE CAMARGO (BOLIVIA)", hora: "9:10", fecha: "2024-04-25T09:10:00-04:00", horaTimeStamp: 1816704000000 },
    { titulo: "Inteligencia artificial y un nuevo mundo, oportunidades y desafíos para la humanidad.", expositor: "GUIDO GIRARDI (CHILE)", hora: "9:20", fecha: "2024-04-25T09:20:00-04:00", horaTimeStamp: 1816705000000 },
    { titulo: "Tecnoceno, IA y el nuevo orden informacional.", expositor: "FLAVIA COSTA (ARGENTINA)", hora: "9:45", fecha: "2024-04-25T09:45:00-04:00", horaTimeStamp: 1816707700000 },
    { titulo: "La gobernanza en tiempos de inteligencia artificial.", expositor: "FERNANDO ARAMAYO (BOLIVIA)", hora: "10:10", fecha: "2024-04-25T10:10:00-04:00", horaTimeStamp: 1816709200000 },
    { titulo: "Neuro política, polarización y democracia.", expositor: "ANA LUCIA VELASCO (BOLIVIA)", hora: "10:25", fecha: "2024-04-25T10:25:00-04:00", horaTimeStamp: 1816710100000 },
    { titulo: "Las oportunidades (y riesgos) de la Inteligencia Artificial en Países en Desarrollo", expositor: "SAID EDUARDO PÉREZ (BOLIVIA)", hora: "10:40", fecha: "2024-04-25T10:40:00-04:00", horaTimeStamp: 1816711000000 },
    { titulo: "DINAMICA DE DIALOGO", hora: "10:55", fecha: "2024-04-25T10:55:00-04:00", horaTimeStamp: 1816712100000 },
    { titulo: "Los avances de la humanidad hacia la cuarta revolución industrial: neuro tecnologías e Inteligencia Artificial.", expositor: "RAFAEL YUSTE (ESPAÑA-EEUU)", hora: "11:05", fecha: "2024-04-25T11:05:00-04:00", horaTimeStamp: 1816713300000 },
    { titulo: "Futuro y cuidado en la era de la inteligencia artificial.", expositor: "BERNARDO TORO (COLOMBIA)", hora: "11:30", fecha: "2024-04-25T11:30:00-04:00", horaTimeStamp: 1816714800000 },
    { titulo: "RECESO", hora: "12:00", fecha: "2024-04-25T12:00:00-04:00", horaTimeStamp: 1816716600000 },
    { titulo: "PRESENTACIÓN DE 4 STARTUPS CON IA, DE BOLIVIA PARA EL MUNDO.", hora: "14:30", fecha: "2024-04-25T14:30:00-04:00", horaTimeStamp: 1816765700000 },
    { titulo: "¿Cómo vivir en nuestro mundo conectado?", expositor: "BRUNO PATINO (FRANCIA)", hora: "14:45", fecha: "2024-04-25T14:45:00-04:00", horaTimeStamp: 1816767200000 },
    { titulo: "Neuroderechos como derechos humanos:  El liderazgo de América Latina", expositor: "STEPHANIE R. GOLOB (EEUU)", hora: "15:10", fecha: "2024-04-25T15:10:00-04:00", horaTimeStamp: 1816768700000 },
    { titulo: "De la protección de datos a los neuro derechos. Propuesta de ley para Bolivia.", expositor: "CRISTIAN LEÓN (BOLIVIA)", hora: "15:35", fecha: "2024-04-25T15:35:00-04:00", horaTimeStamp: 1816770200000 },
    { titulo: "DINAMICA DE DIALOGO", hora: "15:50", fecha: "2024-04-25T15:50:00-04:00", horaTimeStamp: 1816771300000 },
    { titulo: "Política nacional de inteligencia artificial: el caso de Chile.", expositor: "CAROLINA TORREALBA (CHILE)", hora: "16:00", fecha: "2024-04-25T16:00:00-04:00", horaTimeStamp: 1816772800000 },
    { titulo: "¿Cómo hacer robótica con IA en Bolivia?", expositor: "ESTEBAN QUISPE (BOLIVIA)", hora: "16:25", fecha: "2024-04-25T16:25:00-04:00", horaTimeStamp: 1816774300000 },
    { titulo: "IA aplicada a la seguridad ciudadana. La experiencia de FACIA.", expositor: "HUGO CÓRDOVA (BOLIVIA)", hora: "16:40", fecha: "2024-04-25T16:40:00-04:00", horaTimeStamp: 1816775200000 },
    { titulo: "Tendencias en negocios digitales con base en IA.", expositor: "SERGIO GARCIA AGREDA (BOLIVIA)", hora: "16:55", fecha: "2024-04-25T16:55:00-04:00", horaTimeStamp: 1816776300000 },
    { titulo: "Innovación turística en la era de la inteligencia generativa: la experiencia Wikiflix.", expositor: "JOÃO DA SILVEIRA (PORTUGAL)", hora: "17:10", fecha: "2024-04-25T17:10:00-04:00", horaTimeStamp: 1816777400000 },
    { titulo: "REPORTE RÁPIDO DE CONCLUSIONES", hora: "17:35", fecha: "2024-04-25T17:35:00-04:00", horaTimeStamp: 1816779300000 },
    { titulo: "CIERRE", hora: "17:50", fecha: "2024-04-25T17:50:00-04:00", horaTimeStamp: 1816780000000 }
  ];

  programa26: any = { titulo: "TALLER ESPECIALIZADO EN IA Y NEGOCIOS", expositor: "João da Silveira (Portugal) y Hugo Córdova (Bolivia)", descripcion: "¿Cómo transformar tu empresa con IA?", hora: "17:00", fecha: "2024-04-26T17:00:00-04:00" }


  esFechaPasada(fecha: string): boolean {
    const fechaEvento = new Date(fecha);
    const fechaActual = new Date();
    return fechaEvento < fechaActual;
  }
}
``
