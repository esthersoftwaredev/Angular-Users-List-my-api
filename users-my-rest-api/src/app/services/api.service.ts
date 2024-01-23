import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://monacodelisa-node-express.onrender.com/api";

  constructor(private http : HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
