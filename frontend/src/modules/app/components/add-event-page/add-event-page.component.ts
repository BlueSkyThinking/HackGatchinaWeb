import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventParameters } from '../../types/EventParameters';
import { Section } from '../../types/GEvent';

@Component({
    selector: 'app-add-event-page',
    templateUrl: './add-event-page.component.html',
    styleUrls: ['./add-event-page.component.css'],
})
export class AddEventPageComponent {
    public readonly sections = Object.values(Section);

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

    public handleSelectSection(event: Event, value: Section) {
        const isExistValue = this.parameters.eventSections.includes(value);

        if (isExistValue) {
            this.onchange.emit({
                ...this.parameters,
                eventSections: this.parameters.eventSections.filter(
                    section => section !== value
                ),
            });
        } else {
            this.onchange.emit({
                ...this.parameters,
                eventSections: [...this.parameters.eventSections, value],
            });
        }
    }

    public isSelected(value: Section) {
        return this.parameters.eventSections.includes(value);
    }
}
