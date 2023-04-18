import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user!: User;
  loggedIn!: boolean

  constructor(public authService: AuthenticateService){
    authService.userObservable.subscribe((newUser) => {
      this.user = newUser;
      if(this.user){
        this.loggedIn = true;
      }
    })
  }
}
