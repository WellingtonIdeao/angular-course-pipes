import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://a.co/glgjpRP'
  };

  livros: string [] = ['Angular 2', 'Python', 'Django'];

  filtro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(curso: string): void {
    this.livros.push(curso);
    console.log(this.livros);
  }

}
