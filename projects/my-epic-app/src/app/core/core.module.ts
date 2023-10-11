// core/core.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule],
  exports: [MatToolbarModule], // Export Material modules for use in other modules
})
export class CoreModule {}
