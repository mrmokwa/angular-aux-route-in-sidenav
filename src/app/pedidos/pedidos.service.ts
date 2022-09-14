import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Pedido[]> {
    return this.httpClient
      .get<{ data: Pedido[] }>('/api/pedidos?entradaIni=2022-07-01')
      .pipe(map((response) => response.data.slice(0, 5)));
  }

  getById(id: number): Observable<PedidoDetalhado> {
    return this.httpClient.get<PedidoDetalhado>(`/api/pedidos/${id}`);
  }

  deleteItem(id: number, seq: number): Observable<void> {
    return EMPTY;
  }

  complemento(id: number, seq: number, complemento: string) {
    return this.httpClient.put<void>(
      `/api/pedidos/${id}/itens/${seq}/complemento`,
      { complemento }
    );
  }
}
