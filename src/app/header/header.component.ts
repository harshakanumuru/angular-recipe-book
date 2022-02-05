import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() tabClicked = new EventEmitter<string>();
  collapsed = true;
  tabs = [
    { id: 'recipes', label: 'Recipes' },
    { id: 'shoppingList', label: 'Shopping List' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(tabId: string): void {
    this.tabClicked.emit(tabId);
  }
}
