import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotasComponent } from './notas/notas.component';
import { NotasService } from './services';

@NgModule({
  declarations:[NotasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NotasComponent
  ],
  providers: [
    NotasService
  ]
})
export class NotaModule{}
