import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { PlusIconComponent } from './components/plus-icon/plus-icon.component';

@NgModule({
    declarations: [UserIconComponent, PlusIconComponent],
    imports: [CommonModule],
    exports: [UserIconComponent, PlusIconComponent],
})
export class IconsModule {}
