import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  list:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addBookToList(aBook){
    this.list.push(aBook)
  }

  

}
