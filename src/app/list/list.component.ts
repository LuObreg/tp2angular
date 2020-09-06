import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books = [];

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
     
    }
    deleteBook(idBook){
      this.bookService.deleteBook(idBook);
    }
  }



//faltan acá las funciones de  borrar (delete book)

