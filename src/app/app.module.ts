import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimelineModule } from 'ng4-timeline';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
