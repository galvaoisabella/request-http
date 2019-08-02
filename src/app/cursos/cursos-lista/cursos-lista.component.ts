import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { CursosService } from 'src/app/cursos.service';
import { Curso } from 'src/app/curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista' ,
  templateUrl: './cursos-lista.component.html ',
  styleUrls: [ './cursos-lista.component.scss ' ],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[];

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  bsModalRef: bsModalRef;
  modalService: any;

  constructor(
    private service: CursosService,
    private modalservice: BsModalService
  ) {}

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }
  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
    this.service
      .list()
      .pipe(catchError(error => empty()))
      .subscribe(
        dados => {
          console.log(dados);
        },
        error => console.error(error),
        () => console.log('Observable Completo!')
      );
  }
  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
  }
}
