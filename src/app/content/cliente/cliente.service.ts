import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private httpClient: HttpClient) {}

  get(codigo: number) {
    return this.httpClient.get<Item>(`/api/clientes/${codigo}`);
  }
}
