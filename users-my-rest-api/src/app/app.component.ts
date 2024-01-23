import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { ApiService } from "./services/api.service";
import { User } from "./models/user";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
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

	ngOnInit(): void {
		this.apiService.getUsers().subscribe((data) => {
			this.users = data;
		});
	}
}
