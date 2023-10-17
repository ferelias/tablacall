// componente-b.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteB implements OnInit, OnDestroy {
  selectedRow: any;
  selectedEntrada: any;
  detalles: any[] = [];
  entradas: any[] = []; // Agregar esta línea para manejar las entradas
  subscription!: Subscription;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.subscription = this.dataSharingService.getSelectedRow().subscribe(row => {
      if (row) {
        this.selectedRow = row;

        // Cargar detalles
        const detallesFromService = this.dataSharingService.getDetailsByOC(row.oc);
        this.detalles = detallesFromService ? detallesFromService : [];

        // Cargar entradas
        const entradasFromService = this.dataSharingService.getEntradasByOC(row.oc); // Asegúrate de que este método esté implementado en tu servicio
        this.entradas = entradasFromService ? entradasFromService : [];
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Manejar el clic en los detalles
  onDetalleRowClick(detalle: any): void {
    const entradasFromService = this.dataSharingService.getEntradasByOC(detalle.oc);
    this.entradas = entradasFromService ? entradasFromService : [];
  }

  // Manejar el clic en las entradas
  onEntradaClick(entrada: any): void {
    this.selectedEntrada = entrada;
  }


}



