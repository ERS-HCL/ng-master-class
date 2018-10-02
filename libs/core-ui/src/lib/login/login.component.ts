import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hcl-ers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  hide = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
