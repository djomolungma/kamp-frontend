import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
//axios,fetch /7React tarafında

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product1: any = { 
  //   productId: 1, 
  //   productName: 'Bardak', 
  //   categoryId: 1, 
  //   unitPrice: 5 
  // };//{} süslü parantez obje demek (: = demek)
  
  //   product2: any = { 
  //   productId: 2, 
  //   productName: 'Laptop', 
  //   categoryId: 1, 
  //   unitPrice: 5 
  // };
  
  //   product3: any = { 
  //     productId: 3, 
  //     productName: 'Mouse', 
  //     categoryId: 1, 
  //     unitPrice: 5 
  //   };
  
  //   product4: any = { 
  //     productId: 4, 
  //     productName: 'Keyboard', categoryId: 1, unitPrice: 5 }
  
  //   product5: any = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 }

  products:Product[] = [];  
  dataLoaded = false;


  constructor(private productService:ProductService) { }

  ngOnInit(): void {//component ilk kez çalıştıgında çalışan kod
    //console.log("Init çalıştı");
    this.getProducts();//this fonksiyon dışındaki veriye ulaşmak için kullanılır
  }

  getProducts(){
    //console.log("Api request başladı");
    this.productService.getProducts().subscribe(response=>{//burası asenkron çalışıyor
      this.products = response.data;
      this.dataLoaded = true;
      //console.log("Api request bitti");
    })
    //console.log("Method bitti");
  }
}

//ng serve --open       -tarayıcıda açmak için
//ng g service product  //product için yeni servis oluşturur

//yeni bootstrap versiyonunu kurmak için 
//yeni node başlat 
//npm install bootstrap@5.0.0-beta2   -enter tuşuna bas