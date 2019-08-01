import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { CursosService } from 'src/app/cursos.service';
import { Curso } from 'src/app/curso';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];
  
  constructor(private service: CursosService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.cursos = dados);
  }

}
