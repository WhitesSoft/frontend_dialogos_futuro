import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service';
import { lista } from '../../../core/models/lista.models';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BandsPipe } from '../../../core/pipes/bands.pipe';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-listaband',
  standalone: true,
  imports: [CommonModule, FormsModule, BandsPipe],
  templateUrl: './listaband.component.html',
  styleUrl: './listaband.component.scss'
})
export class ListabandComponent {

  lista: lista[] = []
  filter: string = ''

  constructor(
    private inscripcionServ: InscripcionService,
    private toastrService: ToastrService
  ) { }



  ngOnInit() {
    this.getList();
  }

  getList() {
    this.inscripcionServ.getIdentificadores().subscribe(response => {
      this.lista = Object.values(response);
    })
  }

  liberarManilla(id: number) {
    this.inscripcionServ.liberarManilla(id).subscribe(response => {
      this.toastrService.success('Liberacion exitosa', 'Exito', { timeOut: 3000, progressBar: true });
      this.getList();
    })
  }

  generarPDF() {

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Lista de bands asignados', 76, 20);

    let yPos = 30;

    const tableData = [];
    for (const item of this.lista) {
      tableData.push([item.codigo_qr, item.Persona.nombres]);
    }

    (doc as any).autoTable({
      startY: yPos,
      head: [['QR', 'Persona asignada']],
      body: tableData,
      styles: { fontSize: 9 },
      theme: 'grid',
      columnStyles: {
        0: { halign: 'left', cellWidth: 30 },
        1: { halign: 'left', cellWidth: 150 }
      },
      margin: { top: 1, bottom: 10 },
      pageBreak: 'auto'
    });

    doc.save('lista-bands-asignadas.pdf')

  }

}
