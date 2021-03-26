import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {} from '@angular/cdk/drag-drop';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { PaisesComponent } from './paises/paises.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragdropComponent,
    PaisesComponent

  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
