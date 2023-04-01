import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-1';
  isLogged = false;

  constructor(private loginService: LoginService) {
    this.loginService.getIsLogged().subscribe((e) => {
      console.log(e);
      this.isLogged = e;
    });
  }
}
