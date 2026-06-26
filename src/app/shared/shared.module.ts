import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponentComponent } from './components/btn-component/btn-component.component';
import { ToastComponentComponent } from './components/toast-component/toast-component.component';

@NgModule({
  declarations: [
    BtnComponentComponent,
    ToastComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnComponentComponent,
    ToastComponentComponent
  ]
})
export class SharedModule {}