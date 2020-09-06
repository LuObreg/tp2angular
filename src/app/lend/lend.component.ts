import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    

}
//put modificar book.lended
lended = "";

async lendBook(){
  var book = {
  lended: this.lended
  }
  await this.bookService.lendBook(book);
  console.log(book);      
}
}