import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//api ye bağlanma kodu (backend teki dataya erişim için)
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44338/api/Products/GetAll";

  constructor(private httpClient:HttpClient){ } //private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
   

   getProducts():Observable<ProductResponseModel>{
    //api ye bağlanma kodu
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }
}
