import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private url = 'http://3.129.44.20:8081';

  constructor(private http: HttpClient) {}

  listar(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(`${this.url}/cadastros`);
  }

  cadastrar(obj: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(`${this.url}/cadastros`, obj);
  }

  alterar(obj: Cadastro): Observable<Cadastro> {
    return this.http.put<Cadastro>(`${this.url}/cadastros`, obj);
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/cadastros/${id}`);
  }
}