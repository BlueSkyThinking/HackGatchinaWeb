import {Component} from '@angular/core';
import {AuthorizationService} from "../../../authorization/service/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

    constructor(private au: AuthorizationService) {
    }
}
