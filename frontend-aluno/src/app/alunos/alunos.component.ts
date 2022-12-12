
import {Component} from '@angular/core';
/* <!--
- criar novo componente (Aluno)
- criar objeto Aluno(id, nome, end, idade, nota1, nota2, media, status)
- criar novo componente (Aluno) uma lista de 10 alunos
- ir no angular materias component table
- se aluno esta aprovado ou reprovado
- mostrar em um dialog
- 'position', 'name', 'end', 'idade', 'nota1', 'nota2', 'nota3', 'media', 'status'
--> */
export interface PeriodicElement {
  name: string;
  position: number;
  end: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Karla Karoliny Silva Souza', end: "karla@estudante.brasil.br"},
  {position: 2, name: 'Willian Baza', end: "willian@estudante.brasil.br"},
  {position: 3, name: 'Fellype Gael Pereira', end: "fellype@estudante.brasil.br"},
  {position: 4, name: 'Camila Rocha', end: "camilae@estudante.brasil.br"},
  {position: 5, name: 'Isabela Alvez Felix', end: "isabela@estudante.brasil.br"},

];

/**
 * @title ALUNOS.
 */
@Component({
  selector: 'app-alunos',
  styleUrls: ['alunos.component.css'],
  templateUrl: 'alunos.component.html',
})
export class AlunosComponent {
  displayedColumns: string[] = ['position', 'name', 'end'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  alunosService: any;
  alunos: any;
  static id: any;

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.alunosService.addAluno({ name } as unknown as AlunosComponent)
  .subscribe((aluno: any) => {
  this.alunos.push(aluno);
  });
  }

delete(aluno: AlunosComponent): void {
this.alunos = this.alunos.filter((h: AlunosComponent) => h !== aluno);
this.alunosService.deleteHero(this.alunos.id).subscribe();
  }
}
