// componente-a.component.ts
import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})


export class ComponenteA {
  rows = [
    { oc: 4500085006, proveedor: '120056 Aceros del árbol', fecha: '27/09/2023', total: '	$30,525.12', estatus: 'Facturada' /* Sustituir por los datos que vienen de la base de datos */ },
    { oc: 5500009909, proveedor: '120056 Aceros del árbol', fecha: '02/09/2023', total: '	$525.00', estatus: 'Parcial'},
    { oc: 4500007801, proveedor: '120056 Aceros del árbol', fecha: '21/09/2023', total: '	$314.00', estatus: 'Entregada'},
  ];

  constructor(
    private dataSharingService: DataSharingService,
    private router: Router
  ) {}

  onRowClick(row: any) {
    this.dataSharingService.setSelectedRow(row);
    this.router.navigate(['/componente-b']);
  }


  selectedRow: any | null = null;
}
