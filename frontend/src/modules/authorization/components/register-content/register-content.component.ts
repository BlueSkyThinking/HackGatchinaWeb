import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterParameters } from '../../types/RegisterParameters';
import { InputType } from '../../../basic-components/enums/InputType';

@Component({
    selector: 'app-register-content',
    templateUrl: './register-content.component.html',
    styleUrls: ['./register-content.component.css'],
})
export class RegisterContentComponent {
    public readonly inputType = InputType;

    @Input() public parameters: RegisterParameters;

    @Output() public onchange: EventEmitter<
        RegisterParameters
    > = new EventEmitter();

    public handleChange(
        value: string | number,
        field: keyof RegisterParameters
    ) {
        this.onchange.emit({
            ...this.parameters,
            [field]: (event.target as HTMLInputElement).value,
        });
    }
}
