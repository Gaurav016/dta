import { Component, OnInit } from '@angular/core';
import {TabularData} from './tabular-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tabular: TabularData[];
  constructor(){
    var tab= new TabularData(bird:"piegon", mammal:"Elephant", fish:"salmon");
    var tab1= new TabularData(bird:"peacock", mammal:"Mammoth", fish:"salmon");
    var tab2= new TabularData(bird:"hen", mammal:"Tiger", fish:"salmon");
    var tab3= new TabularData(bird:"kiwi", mammal:"Lion", fish:"salmon");
    this.tabular=[tab,tab1,tab2,tab3];
  }

  ngOnInit() {
  }

}
