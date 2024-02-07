import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.css']
})
export class TableMaterialComponent implements OnInit {

  constructor() { }

  displayColumns: string[] = ['createdAt', 'name', 'avatar', 'id']

  ngOnInit(): void {
  }

}
