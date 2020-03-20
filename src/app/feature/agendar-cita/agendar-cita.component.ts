import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../shared/services/swal/swal.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss'],
})
export class AgendarCitaComponent implements OnInit {
  public sedes = [
    { id: 1, nombre: 'Sede 1' },
    { id: 2, nombre: 'Sede 2' },
    { id: 3, nombre: 'Sede 3' },
  ];

  public readonly cita = {
    sede: 1,
    tipoServicio: 'Medicina general',
    fechaReserva: null,
    agendadas: 1,
  };

  public readonly disponibilidad = [
    {
      hora: '08:30',
      profesional: 'Dra. María José De la Cruz',
      especialidad: 'Medico general',
    },
    {
      hora: '09:00',
      profesional: 'Dra. María José De la Cruz',
      especialidad: 'Medico general',
    },
    {
      hora: '09:30',

      profesional: 'Dra. María José De la Cruz',
      especialidad: 'Medico general',
    },
    {
      hora: '10:00',
      profesional: 'Dra. María José De la Cruz',
      especialidad: 'Medico general',
    },
    {
      hora: '10:30',
      profesional: 'Dra. María José De la Cruz',
      especialidad: 'Medico general',
    },
  ];
  public readonly citasAgendadasSelec = [
    { id: 1, nombre: 'Este mes' },
    { id: 2, nombre: 'Todos los meses' },
  ];

  public tab3 = false;
  constructor() {}

  ngOnInit() {
    SwalService.informacion();
  }

  public agendarCita(): void {
    SwalService.agendandoCita(res => {
      if (res) {
        SwalService.citaAgendada(res2 => {
          if (res2) {
            this.tab3 = true;
          }
        });
      }
    });
  }
}
