import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger', 'Prepared with Bread', 'https://mytownburger.com/wp-content/uploads/2019/10/06_Paneer-Burger.jpg'),
    new Recipe('Burger', 'Prepared with Bread', 'https://mytownburger.com/wp-content/uploads/2019/10/06_Paneer-Burger.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
