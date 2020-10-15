import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DespesasSenador, SenadoresService } from '../senadores.service';

@Component({
  selector: 'app-despesas-senadores',
  templateUrl: './despesas-senadores.component.html',
  styleUrls: ['./despesas-senadores.component.css']
})
export class DespesasSenadoresComponent implements OnInit {

  despesasSenadores: DespesasSenador[] = [];

  id: number;

  constructor(private senadoresService: SenadoresService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'));
      this.senadoresService.buscarSenador(this.id)
      .subscribe(despesasSenador => {
        this.despesasSenadores = despesasSenador;
      })
    });
  }

}
