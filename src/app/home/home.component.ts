import { Component, OnInit } from '@angular/core';
import { tableClass } from '../../models/tableClass';
import { callMiddlewareService } from '../../services/callMiddleware'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hundredData: tableClass[] = [];
  displayedColumns: string[] = ['createdAt', 'name', 'avatar', 'id'];
  empData: tableClass[] = [
    {
      createdAt: '2024-1-1',
      name: 'Peter',
      'avatar': 'some',
      'id': '1'
    }
  ]

  dataSource = new MatTableDataSource(this.empData);
  constructor(private service: callMiddlewareService) { }

  ngOnInit(): void {
    // this.retrieveHundredData();
  }

  // retrieveHundredData(): any {
  //   this.service.callMiddlewareService().subscribe({
  //     next: (result) => {
  //       console.log(result);
  //       this.hundredData = result;
  //       this.dataSource = new MatTableDataSource(this.hundredData);
  //     },
  //     error: (error) => { console.log("An error occurred"); console.error(error) },
  //     complete: () => console.info("completed")
  //   })
  // }

}
