import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { ApiService } from "./services/api.service";
import { User } from "./models/user";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MatToolbarModule,
		MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
		MatIconModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	title = "users-my-rest-api";
	apiService = inject(ApiService);
	users: User[] = [];

  showActiveUsers: boolean = false;
  showInactiveUsers: boolean = false;
  showAllUsers: boolean = true;

	ngOnInit(): void {
		this.apiService.getUsers().subscribe((data) => {
			this.users = data;
		});
	}

  showActive() {
    this.showActiveUsers = true;
    this.showInactiveUsers = false;
    this.showAllUsers = false;
  }

  showInactive() {
    this.showActiveUsers = false;
    this.showInactiveUsers = true;
    this.showAllUsers = false;
  }

  showAll() {
    this.showActiveUsers = false;
    this.showInactiveUsers = false;
    this.showAllUsers = true;
  }
}
