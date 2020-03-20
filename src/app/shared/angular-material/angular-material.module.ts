import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MODULOS_MATERIAL } from '.';

@NgModule({
  imports: [CommonModule, LayoutModule, ...MODULOS_MATERIAL],
  exports: [CommonModule, LayoutModule, ...MODULOS_MATERIAL],
})
export class AngularMaterialModule {}
