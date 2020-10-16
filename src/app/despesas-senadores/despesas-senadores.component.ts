import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Despesa, SenadoresService } from '../senadores.service';

@Component({
  selector: 'app-despesas-senadores',
  templateUrl: './despesas-senadores.component.html',
  styleUrls: ['./despesas-senadores.component.css']
})
export class DespesasSenadoresComponent implements OnInit {

  nomeSenador: string = '';
  despesas: Despesa[] = [];
  despesasPorTipo: { tipo: number, total: number }[] = [];

  constructor(private senadoresService: SenadoresService, private route: ActivatedRoute) { 
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'));
      this.senadoresService.buscarSenador(id)
      .subscribe(despesasSenador => {
        this.nomeSenador = despesasSenador.nomeSenador;
        this.despesas = despesasSenador.despesas;
        this.despesasPorTipo = calcularDespesasPorTipo(this.despesas);
      });
    });
  }

  calculaTotal(): number {
    return this.despesasPorTipo.reduce((total, item) => total + item.total, 0);
  }
}

  function calcularDespesasPorTipo(despesas: Despesa[]) {
    let resultado: {tipo: number, total: number}[] = [];
    for(let i = 1; i <= 7; i++){
      const valorTotal = despesas
      .filter(d => d.tipo === i)
      .reduce((total, despesa) => total + despesa.valor, 0);
      resultado[i - 1] = { tipo: i, total: valorTotal};
    }
    return resultado;
  }
