import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {counterStat}from './ngxs-store/state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([counterStat]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
