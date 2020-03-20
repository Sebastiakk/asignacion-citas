import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [AgendarCitaComponent, BarraNavegacionComponent],
  imports: [CommonModule, FeatureRoutingModule, SharedModule],
})
export class FeatureModule {}
