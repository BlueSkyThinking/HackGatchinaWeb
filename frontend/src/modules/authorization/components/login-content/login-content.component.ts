import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginParameters } from '../../types/LoginParameters';
import { InputType } from '../../../basic-components/enums/InputType';

@Component({
    selector: 'app-login-content',
    templateUrl: './login-content.component.html',
    styleUrls: ['./login-content.component.css'],
})
export class LoginContentComponent {
    public readonly inputType = InputType;

    @Input() public parameters: LoginParameters;

    @Output() public onchange: EventEmitter<
        LoginParameters
    > = new EventEmitter();

    public handleChange(value: string | number, field: keyof LoginParameters) {
        this.onchange.emit({
            ...this.parameters,
            [field]: (event.target as HTMLInputElement).value,
        });
    }
}
