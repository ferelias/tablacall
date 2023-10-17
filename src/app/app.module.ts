// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteA } from './componente-a/componente-a.component';
import { ComponenteB } from './componente-b/componente-b.component';
import { ComponentDetallesComponent } from './component-detalles/component-detalles.component';

@NgModule({
  declarations: [AppComponent, ComponenteA, ComponenteB, ComponentDetallesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
