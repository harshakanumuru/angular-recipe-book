import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {}
  onAddIngredient(): void {
    this.shoppingListService.addIngredient({ name: this.name.nativeElement.value, amount: this.amount.nativeElement.value});
  }
}
