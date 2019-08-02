import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent],
  exports: [AlertModalComponent,]
})
export class SharedModule { }
