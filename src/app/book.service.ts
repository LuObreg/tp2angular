import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'http://aqueous-spire-30568.herokuapp.com/';

  constructor(private http: HttpClient) { }

//en libros usamos POST para agregar uno: addBook
//                 GET para obtener el listado
//                DELETE para eliminar uno de la bd:  deleteBook
//                PUT para modificar (prestamo):  lendBook


// Metodo POST 
async addBook(aBook){
  try{
  let result: any;
  result = await this.http.post(this.url+"libro", aBook).toPromise();
  console.log(result);

    return result;
  }
  catch(error){
    console.log(error);
  }
}


// Metodo GET 
async allBooks(){
    try{
        let result: any;

        result = await this.http.get(this.url+"libro").toPromise();
        return result;

    }
    catch(e){
      console.log(e);
      return [];
    
    }}

//Metodo DELETE 
async deleteBook(id){
   try{
      let result: any;
      
      // localhost:3000/libro/aaa111
      result = await this.http.delete(this.url+"libro/"+id).toPromise();

      return true;

    }
    catch(e){
      console.log(e);
      return false;
    }
   }

 

 // Metodo PUT 
  async lendBook(aBook){
      try{
        let result: any;
        result = await this.http.put(this.url+"libro/"+aBook.id, aBook.lended).toPromise();
      }
      catch(e){
        console.log(e);
      }
  }
}