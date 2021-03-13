import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//api ye bağlanma kodu (backend teki dataya erişim için)

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Category } from '../models/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44338/api/Categories/GetAll";

  constructor(private httpClient:HttpClient){ } //private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
   
  getCategories():Observable<ListResponseModel<Category>>{    
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);//this bu sınıfı ifade eder // get<CategoryResponseModel> mepleme işlemi      
  }
}
