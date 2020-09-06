import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books = [];

  constructor() { }

  ngOnInit(): void {
     
    }
  }



//faltan acá las funciones de préstamo (put modificar book.lended) y borrar (delete book)

