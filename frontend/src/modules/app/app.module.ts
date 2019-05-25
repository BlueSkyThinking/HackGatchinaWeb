import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {AuthorizationModule} from '../authorization/authorization.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {routes} from './configs/router.config';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";

const firebaseConfig = {
    apiKey: "AIzaSyC3ceJy03Jdu-LM1LOx8N7my1xIdE_GrIw",
    authDomain: "gatchino-4491c.firebaseapp.com",
    databaseURL: "https://gatchino-4491c.firebaseio.com",
    projectId: "gatchino-4491c",
    storageBucket: "gatchino-4491c.appspot.com",
    messagingSenderId: "578405849724",
    appId: "1:578405849724:web:13b51dca04e1229b"
};


@NgModule({
    declarations: [AppComponent, HomeComponent, HeaderComponent, LayoutComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AuthorizationModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}



