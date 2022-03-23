import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// Import your library
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  
      // InternationalPhoneNumberModule module
    InternationalPhoneNumberModule,
  
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
