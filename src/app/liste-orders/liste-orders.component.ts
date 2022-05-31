import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-liste-orders',
  templateUrl: './liste-orders.component.html',
  styleUrls: ['./liste-orders.component.css'],
})
export class ListeOrdersComponent implements OnInit {

  list: any[] = [];
  constructor(private api: OrdersService, private router: Router) {
    this.api.list().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }
  ngOnInit(): void {}
}
