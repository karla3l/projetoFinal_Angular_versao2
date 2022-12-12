import { Component, OnInit } from "@angular/core";
import { NotasService } from "../services";

@Component({
  selector: 'app-nota',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit{
  res: any;
  med: any;

  constructor(private notasService: NotasService){}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  somar(nota1: string, nota2: string, nota3: string): void {
    let n1: number;
    let n2: number;
    let n3: number;
    n1 = parseFloat(nota1);
    n2 = parseFloat(nota2);
    n3 = parseFloat(nota3);
    this.res = this.notasService.somar(n1, n2, n3);
    this.med = this.notasService.media(n1, n2, n3);
  }

  get resultado(): string{
    return this.res.toString();
  }

  get media(): string{
    return this.med.toString();
  }

}

