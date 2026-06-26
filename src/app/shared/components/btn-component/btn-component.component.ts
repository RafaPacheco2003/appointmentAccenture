import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-component',
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.css']
})
export class BtnComponentComponent {

  @Input() label = 'Crear';
  @Input() type: 'primary' | 'secondary' = 'primary';

  @Output() clickBtn = new EventEmitter<void>();

  onClick() {
    this.clickBtn.emit();
  }
}