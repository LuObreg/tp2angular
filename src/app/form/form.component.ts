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
//tomar los datos del formulario
  id = "";
  name = "";
  author = "";
  gender= "";
  lended ="";

  genders:any;

//recibir la lista de géneros del servidor
  async ngOnInit() {

    this.genders = await this.genderService.genderList();

  }
//agregar los datos a un array de libro y emitir el evento
  async addBook(){
      var book = {
      id: this.id,
      name: this.name,
      author: this.author,
      lended: this.lended,
      gender: this.gender
      }

      await this.bookService.addBook(book);
      console.log(book);      
      this.newBook.emit();
    }
    
  }

