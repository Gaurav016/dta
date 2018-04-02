import { Component, OnInit } from '@angular/core';
import {TabularData} from './tabular-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tabular: TabularData[];
  constructor() {
    const tab = new TabularData('piegon', 'Elephant', 'salmon');
    const tab1 = new TabularData('peacock', 'Mammoth', 'salmon');
    const tab2 = new TabularData('hen', 'Tiger', 'salmon');
    const tab3 = new TabularData('kiwi', 'Lion', 'salmon');
    this.tabular = [tab, tab1, tab2, tab3];
  }

  ngOnInit() {
  }

}
