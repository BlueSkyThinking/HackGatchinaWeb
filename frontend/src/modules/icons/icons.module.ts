import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { PlusIconComponent } from './components/plus-icon/plus-icon.component';
import { ClockIconComponent } from './components/clock-icon/clock-icon.component';
import { PeopleIconComponent } from './components/people-icon/people-icon.component';
import { CurrencyIconComponent } from './components/currency-icon/currency-icon.component';
import { ArrowBackComponent } from './components/arrow-back/arrow-back.component';

@NgModule({
    declarations: [
        UserIconComponent,
        PlusIconComponent,
        ClockIconComponent,
        PeopleIconComponent,
        CurrencyIconComponent,
        ArrowBackComponent,
    ],
    imports: [CommonModule],
    exports: [
        UserIconComponent,
        PlusIconComponent,
        ClockIconComponent,
        PeopleIconComponent,
        CurrencyIconComponent,
        ArrowBackComponent,
    ],
})
export class IconsModule {}
