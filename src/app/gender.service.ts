import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  url = 'https://aqueous-spire-30568.herokuapp.com/';

  constructor(private http: HttpClient) { }

//en genero usamos POST para agregar un libro a la bd de ese género: genderAdd()
//                 GET para obtener el listado de libros por género: genderList()

  // Metodo GET 
async genderList(){
  try{

      let generos:any = await this.http.get(this.url+"genero").toPromise();
      return generos;
      
      console.log(generos);

  }
  catch(e){
    console.log(e);
    return [];
  }
}
// Metodo POST 
async genderAdd(aBook){
  try{
  let result: any;
  result = await this.http.post(this.url+"genero", aBook).toPromise();
  console.log(result);

    return result;
    
  }
  catch(error){
    console.log(error);
  }
}

}
