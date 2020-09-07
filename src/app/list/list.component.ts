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
    //Prestar libro
    /*lended ="";
    async lendBook(book.id){
      var aBook = {
        book: book.id,
        lended: this.lended
      }
      await this.bookService.lendBook(aBook)
    }*/
    
    //Eliminar libro (no está en la api)
    async deleteBook(idBook){
      await this.bookService.deleteBook(idBook);
    }
  }
