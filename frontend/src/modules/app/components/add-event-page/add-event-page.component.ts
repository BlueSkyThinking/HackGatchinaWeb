import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventParameters } from '../../types/EventParameters';

@Component({
    selector: 'app-add-event-page',
    templateUrl: './add-event-page.component.html',
    styleUrls: ['./add-event-page.component.css'],
})
export class AddEventPageComponent {
    @Input() parameters: EventParameters;

    @Output() onchange: EventEmitter<EventParameters> = new EventEmitter();
    @Output() create: EventEmitter<void> = new EventEmitter();

    public handleCreate() {
        this.create.emit();
    }

    public handleChange(value: string | number, field: keyof EventParameters) {
        this.onchange.emit({
            ...this.parameters,
            [field]: value,
        });
    }

    public handleChangeTextArea(event: Event) {
        this.onchange.emit({
            ...this.parameters,
            description: (event.target as HTMLInputElement).value,
        });
    }
}
