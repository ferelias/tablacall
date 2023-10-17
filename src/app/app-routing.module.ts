// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteA } from './componente-a/componente-a.component';
import { ComponenteB } from './componente-b/componente-b.component';
import { ComponentDetallesComponent } from './component-detalles/component-detalles.component';

const routes: Routes = [
  { path: 'componente-a', component: ComponenteA },
  { path: 'componente-b', component: ComponenteB },
  { path: 'ruta-a-componente-detalles/:oc', component: ComponentDetallesComponent },
  { path: '', redirectTo: 'componente-a', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
