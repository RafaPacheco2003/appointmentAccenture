import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-component',
  templateUrl: './toast-component.component.html',
  styleUrls: ['./toast-component.component.css']
})
export class ToastComponentComponent {

  @Input() message: string = 'Mostrar mensaje';
  @Input() type: 'success' | 'error' = 'success';
  @Input() visible: boolean = true;

}
