import { Routes } from '@angular/router';
import { RegistrationContainerComponent } from '../../authorization/containers/registration-container/registration-container.component';
import { LoginContainerComponent } from '../../authorization/containers/login-container/login-container.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../../authorization/guard/auth.guard';
import { EventPageContainerComponent } from '../containers/event-page-container/event-page-container.component';
import { AddEventPageContainerComponent } from '../containers/add-event-page-container/add-event-page-container.component';

const homeRoutes: Routes = [
    { path: 'event', component: EventPageContainerComponent },
    { path: 'add-event', component: AddEventPageContainerComponent },
    { path: '**', component: HomeComponent },
];

export const routes: Routes = [
    {
        path: 'home',
        component: LayoutComponent,
        children: homeRoutes,
        canActivate: [AuthGuard],
    },
    { path: 'login', component: LoginContainerComponent },
    { path: 'registration', component: RegistrationContainerComponent },
    { path: 'event', component: EventPageContainerComponent },
    { path: '**', component: LayoutComponent },
];
