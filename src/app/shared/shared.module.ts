import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrettyNumberPipe } from './pretty-number/pretty-number.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrettyNumberPipe
  ],
  exports: [
    CommonModule
  ]
})
export default class SharedModule {}
