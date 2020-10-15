import { Component, OnInit } from '@angular/core';
import { Senador, SenadoresService } from '../senadores.service';

@Component({
  selector: 'app-senadores',
  templateUrl: './senadores.component.html',
  styleUrls: ['./senadores.component.css']
})
export class SenadoresComponent implements OnInit {
  senadores: Senador[] = [];

  constructor(private senadoresService: SenadoresService) { }

  ngOnInit(): void {
    this.senadoresService.listSenadores().subscribe((senadores) =>{
      this.senadores = senadores;
    });
  }

}
