import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//api ye bağlanma kodu (backend teki dataya erişim için)
//import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44338/api/";

  constructor(private httpClient:HttpClient){ } //private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
   
  getProducts():Observable<ListResponseModel<Product>>{ 
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{  
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId;  
    return this.httpClient.get<ListResponseModel<Product>>(newPath);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add",product);
  }
   //getProducts():Observable<ProductResponseModel>{
    //api ye bağlanma kodu
   // return this.httpClient.get<ProductResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
}
