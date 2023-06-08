import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/service/authentication.service";

@Component({
  selector: 'app-profile-circle',
  templateUrl: './profile-circle.component.html',
  styleUrls: ['./profile-circle.component.scss']
})
export class ProfileCircleComponent {
  constructor(private router: Router,
              private service: AuthenticationService) {
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']).then(r => console.log(r))
  }
}
