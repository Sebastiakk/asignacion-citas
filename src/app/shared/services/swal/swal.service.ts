import Swal from 'sweetalert2';

export class SwalService {
  constructor() {}

  public static informacion(): void {
    Swal.fire({
      imageUrl: '/assets/img/swal-informacion.png',
      showCloseButton: true,
      title: 'REVISA TODOS TUS DATOS, Y SI ES NECESARIO, ACTUALÍZALOS',
      text: 'Da clic en cada campo que contenga la información que desees actualizar o modificar.',
      confirmButtonText: 'Entendido',
    });
  }
  public static agendandoCita(callback: (respuesta: boolean) => void): void {
    Swal.fire({
      imageUrl: '/assets/img/swal-agendando-cita.png',
      title: 'ESTAMOS ASIGNANDO TU CITA CON EL ESPECIALISTA QUE SELECCIONASTE',
      html: `
      Por favor, lee atentamente las siguientes recomendaciones a tener en cuenta antes de tu cita:
      <br>
      <p class="left-align"> <strong>1) </strong> Por favor, recuerde llegar 15 minutos antes.</p>
      <p class="left-align"> <strong>2) </strong> Llevar su cédula, sin esta no será atendido.</p>
      <p class="left-align">
      <strong>3) </strong> Si tiene exámenes, debe llevarlos. En caso de no hacerlo, posiblemente no sea atendido.</p>
      <p class="left-align"> <strong>4) </strong> Para citas de Fisioterapia llevar ropa cómoda para ejercicio.</p>
      `,
      customClass: {
        container: 'swal-agendando-cita',
      },
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonText: 'Las he leído',
      cancelButtonText: 'Regresar',
    }).then(res => callback(res.value === true));
  }

  public static citaAgendada(callback: (respuesta: boolean) => void): void {
    Swal.fire({
      imageUrl: '/assets/img/swal-correcto.png',
      title: 'TU CITA HA SIDO ASIGNADA CORRECTAMENTE',
      html: `
      Por favor, lee atentamente las siguientes recomendaciones a tener en cuenta antes de tu cita:
      <br>
      <p class="left-align"> <strong>EXPEDIENTE: </strong> Brazo izquierdo 19/03/2020</p>
      <p class="left-align"> <strong>SERVICIO: </strong> Medicina general</p>
      <p class="left-align"> <strong>SEDE: </strong> Sede 1 19/03/2020</p>
      <p class="left-align"> <strong>DIRECCIÓN: </strong> CLL 10 # 11-03</p>
      <p class="left-align"> <strong>FECHA Y HORA: </strong> 20/03/2020 09:30</p>
      <p class="left-align"> <strong>PROFESIONAL: </strong> Dra. María José De la Cruz</p>
      `,
      footer:
        'Señor usuario, recuerde que si llega tarde a la cita no será atendido. Podrá reasignar según la disponibilidad de agenda',
      customClass: {
        container: 'swal-cita-agendada',
      },
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(res => callback(res.value === true));
  }
}
