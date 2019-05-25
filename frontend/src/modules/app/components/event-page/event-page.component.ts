import { Component, Input } from '@angular/core';
import { GEvent } from '../../types/GEvent';

@Component({
    selector: 'app-event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent {
    @Input() public event: GEvent;

    public get style() {
        return {
            backgroundImage: `url(${this.event.imgUrl})`,
        };
    }
}
