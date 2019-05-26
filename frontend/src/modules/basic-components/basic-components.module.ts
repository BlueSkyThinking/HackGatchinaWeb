import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
    declarations: [InputComponent, TextareaComponent],
    imports: [CommonModule],
    exports: [InputComponent, TextareaComponent],
})
export class BasicComponentsModule {}
