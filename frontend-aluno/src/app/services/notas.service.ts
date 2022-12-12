import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  constructor(){}
  somar(nota1: number, nota2: number, nota3: number): number {
    let resultado: number;
    let media: number;
    resultado = nota1 + nota2 + nota3;
    //media = (resultado / 3)
    return resultado;
    
  }
  media(nota1: number, nota2: number, nota3: number): number {
    let resultado: number;
    let media: number;
    resultado = nota1 + nota2 + nota3;
    media = (resultado / 3)
    return media;

}
}
