import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  get(codigo: string) {
    return this.httpClient.get<Item>(`/api/itens/${codigo}`);
  }
}
