import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {LoginParameters} from "../types/LoginParameters";
import {AngularFireDatabase} from "@angular/fire/database";
import {Profile} from "../types/Profile";
import * as firebase from "firebase/app";
import {EventService} from "../../app/service/event.service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    constructor(private fireAuth: AngularFireAuth, private fireDatabase: AngularFireDatabase, private es: EventService) {
        this.login({login: "komdosh@yandex.ru", password: "5555555555"})
    }

    async login(creds: LoginParameters) {
        await this.fireAuth.authState.subscribe(user => {
            if (user == null) {
                this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                this.fireAuth.auth.signInWithEmailAndPassword(creds.login, creds.password).then(fireCred => {
                    this.getProfile(fireCred.user.email);
                });
            }
            this.getProfile(user.email);
            this.es.getAll();
        });
    }

    async register(creds: LoginParameters) {
        const userCredential = await this.fireAuth.auth.createUserWithEmailAndPassword(creds.login, creds.password);
        const fireUser = userCredential.user;
        this.fireAuth.auth.currentUser;
    }

    async updateProfile(profile: Profile) {
        const userCredential = this.fireAuth.auth.currentUser;
        this.fireDatabase.object("/users/" + userCredential.email.replace("\.", "%")).set(profile);
    }

    async getProfile(email: string) {
        this.fireDatabase.object("/users/" + email.replace("\.", "%")).valueChanges().subscribe(d => {
            console.log(d)
        });
    }

    logout() {
        this.fireAuth.auth.signOut();
    }
}
