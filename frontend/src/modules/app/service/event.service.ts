import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { GEvent } from '../types/GEvent';
import { AppState } from '../types/AppState';
import { Store } from '@ngrx/store';
import { SetEventListAction } from '../actions/SetEventListAction';
import { EventParameters } from '../types/EventParameters';

@Injectable({
    providedIn: 'root',
})
export class EventService {
    allEvents: Array<GEvent> = [];
    eventsByUser: Array<GEvent> = [];

    constructor(
        private fireAuth: AngularFireAuth,
        private fireDatabase: AngularFireDatabase,
        private readonly store: Store<AppState>
    ) {}

    getAll() {
        const userEmail = this.fireAuth.auth.currentUser.email;
        this.fireDatabase
            .object('/events')
            .valueChanges()
            .subscribe(fireEvents => {
                this.allEvents = Object.values(fireEvents) as Array<GEvent>;
                this.store.dispatch(new SetEventListAction(this.allEvents));
                if (this.allEvents == null) {
                    this.eventsByUser = [];
                    return;
                }
                this.eventsByUser = this.allEvents.filter(event => {
                    if (event.ownerEmail === userEmail) {
                        return true;
                    }

                    return this.inParticipants(event, userEmail);
                });
            });
    }

    async createOrUpdateEvent(event: EventParameters) {
        await this.fireDatabase
            .object('/events/' + event.name + event.time)
            .set(event);
    }

    async deleteEvent(event: GEvent) {
        const userEmail = this.fireAuth.auth.currentUser.email;
        if (event.ownerEmail === userEmail || event.ownerEmail == null) {
            await this.fireDatabase
                .object('/events/' + event.name + event.time)
                .remove();
        }
    }

    // async toggleEventSubscribe(event: GEvent) {
    //     const userEmail = this.fireAuth.auth.currentUser.email;
    //     if (
    //         event.participantEmails != null &&
    //         this.inParticipants(event, userEmail)
    //     ) {
    //         event.participantEmails = event.participantEmails.filter(
    //             pe => pe !== userEmail
    //         );
    //     } else {
    //         event.participantEmails.push(userEmail);
    //     }
    //     this.createOrUpdateEvent(event);
    // }

    private inParticipants(event: GEvent, userEmail) {
        return (
            event.participantEmails != null &&
            !!event.participantEmails.find(e => e === userEmail)
        );
    }
}
