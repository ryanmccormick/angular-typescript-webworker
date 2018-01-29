import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerResponseComponent } from './worker-response/worker-response.component';
import { HashFromInputComponent } from './hash-from-input/hash-from-input.component';
import { FormsModule } from '@angular/forms';

export const demoComponents = [WorkerResponseComponent, HashFromInputComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [demoComponents],
  declarations: [demoComponents]
})
export class DemoModule { }
