import { Component, Input } from '@angular/core';
import { GEvent } from '../../types/GEvent';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
    @Input() events: GEvent[];
}
