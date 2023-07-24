import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users: User[] = [
    {
      "id": 1,
      "username": "jesus",
      "password": "111111"
  },
  {
      "id": 2,
      "username": "maria",
      "password": "222222"
  },
  {
      "id": 3,
      "username": "dulce",
      "password": "333333"
  },
  {
      "id": 4,
      "username": "brian",
      "password": "444444"
  },
  {
      "id": 5,
      "username": "pablo",
      "password": "555555"
  },
  {
      "id": 6,
      "username": "david",
      "password": "666666"
  },
  {
      "id": 7,
      "username": "natalia",
      "password": "123456"
  },
  {
      "id": 8,
      "username": "txema",
      "password": "654321"
  },
  {
      "id": 9,
      "username": "sidi",
      "password": "101010"
  },
  {
      "id": 10,
      "username": "francisco",
      "password": "012345"
  }
  ];

  username: string = '';
  password: string = '';
  showInvalidDataAlert: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      this.router.navigate(['/dashboard']);
      this.showInvalidDataAlert = false; 
    } else {
      this.showInvalidDataAlert = true;
    }
  }
}