import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Senador {
  id: number,
  nomeSenador: string
}

export interface DespesasSenador{
  id: number,
  nomeSenador: string,
  despesas: {
    tipo: number,
    fornec: string,
    ano: number,
    mes: number,
    dia: number,
    valor: number
  }
}

export const tipos = {
  1:"Aluguel de imóveis e despesas concernentes a eles",
  2:"Divulgação da atividade parlamentar",
  3:"Aquisição de material de consumo para uso no escritório",
  4:"Passagens aéreas, aquáticas e terrestres nacionais",
  5:"Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços",
  6:"Locomoção, hospedagem, alimentação e combustíveis",
  7:"Serviços de Segurança Privada"
}

const urlBase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SenadoresService {

  constructor(private http: HttpClient) { }

  listSenadores() {
    return this.http.get<Senador[]>(`${urlBase}/senadores?_sort=name`);
  }

  buscarSenador(id: number){
    return this.http.get<DespesasSenador>(`${urlBase}/senadores/${id}`);
  }
}
