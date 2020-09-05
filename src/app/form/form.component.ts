import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newBook = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  name = "";
  author = "";
  gender = "";
  lended = "";

  addBook(){
    var book = {
      name: this.name,
      author: this.author,
      gender: this.gender,
      lended: this.lended
    }

    this.newBook.emit(book);
  }

}
