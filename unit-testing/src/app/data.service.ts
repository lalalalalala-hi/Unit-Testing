import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUser(id: number, data: any) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      data
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  createUser(data: any) {
    return this.http.post(`https://jsonplaceholder.typicode.com/users`, data);
  }
}
