import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { FormsModule } from '@angular/forms';
import { OnSalePipe } from './on-sale.pipe';

@NgModule({
  declarations: [AppComponent, HomeDemoComponent, OnSalePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
