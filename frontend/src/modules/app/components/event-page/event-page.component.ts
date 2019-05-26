import { Component, Input } from '@angular/core';
import { GEvent } from '../../types/GEvent';
import { EventService } from '../../service/event.service';

@Component({
    selector: 'app-event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent {
    @Input() public event: GEvent;

    constructor(private readonly eventService: EventService) {}

    public get style() {
        return {
            backgroundImage: `url(${this.event.imgUrl})`,
        };
    }

    public handleParticipate() {
        this.eventService.toggleEventSubscribe(this.event);
    }
}
