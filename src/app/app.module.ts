import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RumorCardComponent } from './rumor-card/rumor-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { RumorListComponent } from './rumor-list/rumor-list.component';
import { RumorDetailComponent } from './rumor-detail/rumor-detail.component';
import { HomeComponent } from './home/home.component';
import { RumorSubmitComponent } from './rumor-submit/rumor-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    RumorCardComponent,
    NavBarComponent,
    JumboComponent,
    RumorListComponent,
    RumorDetailComponent,
    HomeComponent,
    RumorSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
