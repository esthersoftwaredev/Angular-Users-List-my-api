import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ApiService } from './services/api.service';
import { User } from './models/user';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'users-my-rest-api';
  apiService = inject(ApiService);
  users: User[] = [];

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
