import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-liste-products',
  templateUrl: './liste-products.component.html',
  styleUrls: ['./liste-products.component.css'],
})
export class ListeProductsComponent implements OnInit {
  list: any[] = [];
  constructor(private api: ProductsService, private router: Router) {
    this.api.list().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }
  ngOnInit(): void {}
  removeProduct=async (id: String) =>{
   await  this.api.delete(id);
      this.api.list().subscribe((data) => {
        this.list = data;
      });
  }
  navigatetoUpdateProduct(id : String) {
     this.router.navigateByUrl('/updateProduct/' +id);
  }
}

