//import { Aluno } from '.';
import { Injectable } from "@angular/core";
import { catchError, Observable, tap , map, of} from "rxjs";
import { AlunosComponent } from "./alunos.component"
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

      constructor(
      private http: HttpClient,

      //private heroesUrl = 'api/alunos';
      ) { }
  private log(message: string) {
  //this.messageService.add(`AlunoService: ${message}`);
  }
  private alunosUrl = 'api/alunos';  // URL to web api
  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  // TODO: send the error to remote logging infrastructure
  console.error(error); // log to console instead
  // TODO: better job of transforming error for user consumption
  this.log(`${operation} failed: ${error.message}`);
  // Let the app keep running by returning an empty result.
  return of(result as T);
  };
  }

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateAluno(Aluno: AlunosComponent): Observable<any> {
  return this.http.put(this.alunosUrl, Aluno, this.httpOptions).pipe(
  tap(_ => this.log(`updated aluno id=${AlunosComponent.id}`)),
  catchError(this.handleError<any>('updateAluno'))
  );
  }

/** POST: add a new aluno to the server */
addAluno(aluno: AlunosComponent): Observable<AlunosComponent> {
return this.http.post<AlunosComponent>(this.alunosUrl, aluno, this.httpOptions).pipe(
tap((newHero: AlunosComponent) => this.log(`added aluno w/ id=${AlunosComponent.id}`)),
catchError(this.handleError<AlunosComponent>('addAluno'))
);
}

/** DELETE: delete the aluno from the server */
deleteAluno(id: number): Observable<AlunosComponent> {
const url = `${this.alunosUrl}/${id}`;
return this.http.delete<AlunosComponent>(url, this.httpOptions).pipe(
tap(_ => this.log(`deleted aluno id=${id}`)),
catchError(this.handleError<AlunosComponent>('deleteAluno'))
);
}


}
