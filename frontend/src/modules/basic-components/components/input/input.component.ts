import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../enums/InputType';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent {
    @Input() type: InputType;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() title: string;
    @Input() value: string;
    @Input() tooltip = '';
    @Input() disabled: boolean;

    @Output() onchange: EventEmitter<string | number> = new EventEmitter();

    public isSelect: boolean;
    public initialType: string;

    constructor() {
        this.value = '';
        this.isSelect = false;
        this.type = InputType.TEXT;
        this.step = 1;
    }

    toggleSelect(): void {
        this.isSelect = !this.isSelect;
    }

    handleChange(event: Event): void {
        this.onchange.emit((event.target as HTMLInputElement).value);
    }

    toggleType(): void {
        this.type =
            this.type === InputType.TEXT ? InputType.PASSWORD : InputType.TEXT;
    }
}
