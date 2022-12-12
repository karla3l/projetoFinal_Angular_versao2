import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titulo do projeto 001 - Angular';
  title2 = 'Outro titulo'
  a = 10;
  b = 20;
  soma = this.a+this.b;

  printTitle(): string{
    return this.title;
  //filter e map no angular
  }
}

//criar 10 componentes na mesma tela
//
