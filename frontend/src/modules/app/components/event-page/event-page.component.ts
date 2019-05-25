import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent {
    public get style() {
        return {
            backgroundImage:
                'url(./../../../../assets/images/event-item-full.jpg)',
        };
    }
}
