import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

// Asegúrate de definir estos tipos en tu código o reemplazarlos con tipos adecuados
type Detalle = any; // Reemplaza 'any' con la estructura real de tu tipo 'Detalle'
type Entrada = any; // Reemplaza 'any' con la estructura real de tu tipo 'Entrada'

@Component({
  selector: 'app-component-detalles',
  templateUrl: './component-detalles.component.html',
  styleUrls: ['./component-detalles.component.css']
})
export class ComponentDetallesComponent implements OnInit {
  ocNumber: string | null = null;
  detalles: Detalle[] = [];
  entradas: Entrada[] = [];

  constructor(
    private dataSharingService: DataSharingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ocNumber = params.get('oc'); // Cambiado de 'ocNumber' a 'oc' para coincidir con tu ruta
      if (this.ocNumber) {
        this.detalles = this.dataSharingService.getDetailsByOC(this.ocNumber) || [];
        this.entradas = this.dataSharingService.getEntradasByOC(this.ocNumber) || [];
      }
    });
  }

  onDetalleRowClick(entrada: Entrada): void {
    console.log(entrada);


  }

}

