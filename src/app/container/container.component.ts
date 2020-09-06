import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { GenderService } from '../gender.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  list:any = [];

  constructor(private bookService: BookService, private genderService: GenderService) { }

  async ngOnInit(){
    this.list = await this.bookService.allBooks()
  }

  async addBookToList(aBook){
    await this.bookService.addBook(aBook);
  }

}
