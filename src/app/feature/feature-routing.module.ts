import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: AgendarCitaComponent,
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
