import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empregados } from '../empregados';

@Injectable({
  providedIn: 'root'
})
export class EmpregadosService {

  private URL = 'http://localhost:8082/api/v1/empregados';

  constructor(private httpClient: HttpClient) { }

  getEmpregadosList(): Observable<Empregados[]> {
    return this.httpClient.get<Empregados[]>(this.URL);
  }

  addEmpregado(empregado: Empregados): Observable<Object> {
    return this.httpClient.post(this.URL, empregado);
  }

}
