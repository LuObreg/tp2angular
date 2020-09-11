import { Component, OnInit, Input} from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books = [];
  
//Enlazar el service
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
     
    }
    
    //Prestar libro
    person ="";
    async lendBook(book){
      var aBook = {
        bookId: book.id,
        lended: this.person
      }
      await this.bookService.modifyLended(aBook);
      console.log(aBook);
    }
    
    //Eliminar libro (no está en la api)
    async deleteBook(idBook){
      await this.bookService.deleteBook(idBook);
    }
  }
