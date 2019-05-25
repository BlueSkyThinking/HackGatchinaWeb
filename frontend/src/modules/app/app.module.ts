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
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment.prod';
import {userReducer} from './reducers/user.reducer';
import {MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {IconsModule} from '../icons/icons.module';
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {EventItemComponent} from './components/event-item/event-item.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { EventPageComponent } from './components/event-page/event-page.component';

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
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        LayoutComponent,
        UserInfoComponent,
        UserMenuComponent,
        EventItemComponent,
        EventPageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AuthorizationModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({
            userState: userReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        MatButtonModule,
        MatMenuModule,

        AuthorizationModule,
        IconsModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
