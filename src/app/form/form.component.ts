import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../book.service';
import { GenderService } from '../gender.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newBook = new EventEmitter();

  constructor(private bookService: BookService, private genderService: GenderService) { };

  name = "";
  author = "";
  gender= "";
  lended ="";

  genders:any;

  async ngOnInit() {

    this.genders = await this.genderService.genderList();

    console.log("generos ", this.genders);

  }

  async addBook(){
      var book = {
      name: this.name,
      author: this.author,
      gender: this.gender,
      lended: this.lended
      }

      await this.bookService.addBook(book);
      console.log(book);      
      this.newBook.emit();
    }
    
  }

