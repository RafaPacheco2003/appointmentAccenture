import { Component } from '@angular/core';


@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent {


  // Variables del formulario
  nombre = '';
  apellido = '';
  fecha = '';
  hora = '';


  // Variables del toast
  showToast = false;

  toastMessage = '';

  toastType: 'success' | 'error' = 'success';



  agendarCita(){


    console.log("Botón funcionando");


    // Aquí ya tienes los datos guardados
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.fecha);
    console.log(this.hora);



    this.toastMessage = 
    `Cita agendada:
    Paciente: ${this.nombre} ${this.apellido}
    Fecha: ${this.fecha}
    Hora: ${this.hora}`;


    this.toastType = "success";


    this.showToast = true;



    setTimeout(() => {

      this.showToast = false;

    },3000);


  }


}