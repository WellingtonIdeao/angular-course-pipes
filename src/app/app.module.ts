import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
//import '@angular/common/locales/global/pt';

import { registerLocaleData } from '@angular/common';
import localePt  from '@angular/common/locales/pt';
import { SettingsService } from './settings.service';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
     {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) => settingsService.getLocale()
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
