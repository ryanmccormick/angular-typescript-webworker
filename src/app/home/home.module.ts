import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DemoModule } from '../demo/demo.module';

export const homeComponents = [HomeComponent];

@NgModule({
  imports: [
    CommonModule,
    DemoModule
  ],
  exports: [homeComponents],
  declarations: [homeComponents]
})
export class HomeModule { }
