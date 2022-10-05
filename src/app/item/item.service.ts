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

  getAllConfigs(itemId: string) {
    return this.httpClient.get<ApiResponse<Configuracao>>(
      `/api/itens/${itemId}/config`
    );
  }

  getConfig(itemId: string, configId: number) {
    return this.httpClient.get<Configuracao>(
      `/api/itens/${itemId}/config/${configId}`
    );
  }
}
