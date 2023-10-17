// data-sharing.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Detalle {
  linea: string;
  descripcion: string;
}

export type Entrada = {
  clave: number;
  noentrada: number;
};

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private selectedRow = new BehaviorSubject<any>(null);

  // Simulando la lógica para obtener los detalles, ajusta según tu lógica de negocio
  private detalles = {
    '4500085006': [
      {
      linea: '0010', descripcion: 'Ligas', cantidad: 100, unidad: 'PZ', precio: 18.00, importe: 1800.00
      },
      {
        linea: '0020', descripcion: 'Libreta F/F Cuadro chico Pasta Dura', cantidad: 50, unidad: 'PZ', precio: 22.00, importe: 1060.00
      },
      {
        linea: '0030', descripcion: 'Folder T/Carta Beige', cantidad: 60, unidad: 'PZ', precio: 2.00, importe: 120.00
      },
  ],
    '5500009909': [{ linea: '0020', descripcion: 'Producto2' }],
    // ... otros detalles
  };

  private entradasData = {
    '0010': [
      {
        clave: 101, noentrada: 5000103139, referencia: 'FAC A-3065', fecha: '2023-sept-02', importe: 450, estatus: 'facturada'
      },
      {
        clave: 101, noentrada: 5000103287, referencia: 'B 568', fecha: '2023-Agost-29', importe: 10, estatus: 'Entregado'
      },
      {
        clave: 101, noentrada: 5000102575, referencia: 'FACT-548-2', fecha: '2023-Jul-15', importe: 5, estatus: 'Parcial'
      }
    ]
  };


  setSelectedRow(data: any) {
    this.selectedRow.next(data);
  }

  getSelectedRow(): Observable<any> {
    return this.selectedRow.asObservable();
  }

  // Método para obtener detalles basados en No O.C
  getDetailsByOC(ocNumber: string): Detalle[] | undefined {
    return this.detalles[ocNumber as keyof typeof this.detalles] || [];
  }

  getEntradasByOC(ocNumber: string): Entrada[] | undefined {
    // lógica para retornar las entradas correspondientes
    return this.entradasData[ocNumber as keyof typeof this.entradasData];
  }
}
