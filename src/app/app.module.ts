import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopDirective } from './desktop-directive';
import { MobileDirective } from './mobile-directive';

@NgModule({
  declarations: [
    AppComponent,
    MobileDirective,
    DesktopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
