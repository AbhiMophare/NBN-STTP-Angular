import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentInputComponent } from './student-input/student-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    StudentInputComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
