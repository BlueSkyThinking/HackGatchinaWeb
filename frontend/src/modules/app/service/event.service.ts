import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";
import {GEvent} from "../types/GEvent";

@Injectable({
    providedIn: 'root'
})
export class EventService {

    allEvents: Array<GEvent> = [];
    eventsByUser: Array<GEvent> = [];

    constructor(private fireAuth: AngularFireAuth, private fireDatabase: AngularFireDatabase) {

    }

    getAll() {
        const userEmail = this.fireAuth.auth.currentUser.email;
        this.fireDatabase.object("/events").valueChanges().subscribe(fireEvents => {
            this.allEvents = Object.values(fireEvents) as Array<GEvent>;
            if (this.allEvents == null) {
                this.eventsByUser = [];
                return;
            }
            this.eventsByUser = this.allEvents.filter(event => {
                if (event.ownerEmail === userEmail) {
                    return true;
                }

                return event.participantEmails != null && !!Object.values(event.participantEmails).find(e =>
                    e === userEmail
                );
            });
        });
    }

    async createOrUpdateEvent(event: GEvent) {
        const userEmail = this.fireAuth.auth.currentUser.email;
        if (event.ownerEmail == userEmail || event.ownerEmail == null) {
            await this.fireDatabase.object("/events/" + event.name + event.time).set(event);
        }

    }
}
