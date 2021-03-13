import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  currentCategory:Category;  //currentCategory:Category = {categoryId:0,categoryName:""};  tsconfig.json den "strictPropertyInitialization": false yapıldı
  dataLoaded=false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    //console.log("Api request başladı");
    this.categoryService.getCategories().subscribe(response=>{//burası asenkron çalışıyor
      this.categories = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentCategory(category:Category){
    //console.log(category.categoryName);
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
}
