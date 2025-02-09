import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = "https://monacodelisa-node-express.onrender.com/api";
  // private apiUrl = "https://monacodelisa-node-express.cyclic.app/api";
  // private apiUrl = "https://rest-api.monacodelisa.dev/api";
  // private apiUrl = "https://dummy-data.ewbeserver.de/api";
  private apiUrl = "https://my-api.esthersoftware.dev/api";

  constructor(private http : HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
