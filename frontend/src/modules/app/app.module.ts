import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AuthorizationModule } from '../authorization/authorization.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './configs/router.config';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment.prod';
import { userReducer } from './reducers/user.reducer';
import { MatButtonModule, MatCardModule, MatMenuModule } from '@angular/material';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { IconsModule } from '../icons/icons.module';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { EventItemComponent } from './components/event-item/event-item.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        LayoutComponent,
        UserInfoComponent,
        UserMenuComponent,
        EventItemComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
