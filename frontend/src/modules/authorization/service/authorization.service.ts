import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginParameters } from '../types/LoginParameters';
import { AngularFireDatabase } from '@angular/fire/database';
import { Interest, Profile } from '../types/Profile';
import * as firebase from 'firebase/app';
import { EventService } from '../../app/service/event.service';
import { AppState } from '../../app/types/AppState';
import { Store } from '@ngrx/store';
import { SetUserAction } from '../actions/SetUserAction';
import { User } from '../types/User';
import { Router } from '@angular/router';
import { ResetUserAction } from '../actions/ResetUserAction';
import { RegisterParameters } from '../types/RegisterParameters';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    constructor(
        private fireAuth: AngularFireAuth,
        private fireDatabase: AngularFireDatabase,
        private es: EventService,
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {
        this.fireAuth.authState.subscribe(user => {
            if (user != null) {
                this.getProfile(user.email);
                this.es.getAll();
            }
        });
    }

    async login(creds: LoginParameters) {
        await this.fireAuth.auth.setPersistence(
            firebase.auth.Auth.Persistence.LOCAL
        );
        this.fireAuth.auth
            .signInWithEmailAndPassword(creds.login, creds.password)
            .then(fireCred => {
                this.getProfile(fireCred.user.email);
                this.es.getAll();
            });
    }

    async register(creds: RegisterParameters) {
        await this.fireAuth.auth.createUserWithEmailAndPassword(
            creds.login,
            creds.password
        );
        this.updateProfile({
            firstName: creds.firstName,
            lastName: creds.lastName,
            dateOfBirth: null,
            interests: [],
            about: '',
        });
        this.getProfile(this.fireAuth.auth.currentUser.email);
    }

    async updateProfile(profile: Profile) {
        const userCredential = this.fireAuth.auth.currentUser;
        await this.fireDatabase
            .object('/users/' + userCredential.email.replace('.', '%'))
            .set(profile);
    }

    async getProfile(email: string) {
        this.fireDatabase
            .object('/users/' + email.replace('.', '%'))
            .valueChanges()
            .subscribe((user: User) => {
                this.store.dispatch(new SetUserAction(user));
                this.router.navigate(['/home']);
            });
    }

    logout() {
        this.fireAuth.auth.signOut();
        this.store.dispatch(new ResetUserAction());
        this.router.navigate(['login']);
    }
}
