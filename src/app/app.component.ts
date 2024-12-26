import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiService } from "./services/api.service";
import { User } from "./models/user";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		MatToolbarModule,
		MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
		MatIconModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	title = "angular-users-my-api";
	apiService = inject(ApiService);
	users: User[] = [];

  showActiveUsers: boolean = false;
  showInactiveUsers: boolean = false;
  showAllUsers: boolean = true;
  sanitizer = inject(DomSanitizer);
  matIconRegistry = inject(MatIconRegistry);
  currentUrl = window.location.href;

  constructor() {
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "x",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/x.svg")
    );
  }

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

  shareOnLinkedIn() {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    window.open(linkedInShareUrl, '_blank');
  }

  shareOnX() {
    const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.currentUrl)}`;
    window.open(xShareUrl, '_blank');
  }

  copyLink() {
    navigator.clipboard.writeText(this.currentUrl).then(() => {
      alert('Link copied to clipboard!');
    }, () => {
      alert('Failed to copy the link.');
    });
  }
}
