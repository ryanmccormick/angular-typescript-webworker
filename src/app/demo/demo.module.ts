import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerResponseComponent } from './worker-response/worker-response.component';

export const demoComponents = [WorkerResponseComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [demoComponents],
  declarations: [demoComponents]
})
export class DemoModule { }
