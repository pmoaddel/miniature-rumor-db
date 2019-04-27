import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RumorCardComponent } from './rumor-card/rumor-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JumboComponent } from './jumbo/jumbo.component';

@NgModule({
  declarations: [
    AppComponent,
    RumorCardComponent,
    NavBarComponent,
    JumboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
