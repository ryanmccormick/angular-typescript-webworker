import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerService } from './worker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [WorkerService]
})
export class WorkerModule { }
