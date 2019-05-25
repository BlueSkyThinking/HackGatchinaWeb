import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginParameters } from '../../types/LoginParameters';

@Component({
    selector: 'app-login-content',
    templateUrl: './login-content.component.html',
    styleUrls: ['./login-content.component.css'],
})
export class LoginContentComponent {
    @Input() public parameters: LoginParameters;

    @Output() public onchange: EventEmitter<
        LoginParameters
    > = new EventEmitter();

    public handleChange(value: string | number, field: keyof LoginParameters) {
        console.log(value);
        this.onchange.emit({
            ...this.parameters,
            [field]: (event.target as HTMLInputElement).value,
        });
    }
}
