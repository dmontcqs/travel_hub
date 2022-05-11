import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
