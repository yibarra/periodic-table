import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeriodicTableModule } from  './periodic-table/periodic-table.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyDYlFrqdkrM8D_gBdIUVr3TkvItwkhzRPw",
  authDomain: "periodic-table-6ce24.firebaseapp.com",
  databaseURL: "https://periodic-table-6ce24.firebaseio.com",
  storageBucket: "periodic-table-6ce24.appspot.com",
  messagingSenderId: "415266496218"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    PeriodicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
