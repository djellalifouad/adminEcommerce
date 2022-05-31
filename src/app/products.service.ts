import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  list(): Observable<any[]> {
    return this.http.get('http://localhost:3003/products') as Observable<any[]>;
  }
  getOneProduct(id: String): Observable<any> {
    return this.http.get('http://localhost:3003/products/'+id) as Observable<any>;
  }
  patch(id : String , data :any ) {
    this.http.patch('http://localhost:3003/products/' + id,data).subscribe((data) => {
        this.toastr.success('Operation Success', 'Product updated successfully');
        this.router.navigateByUrl('/products');
    });
  }
  delete(id: String) {
    console.log('http://localhost:3003/products/' + id);
    this.http
      .delete('http://localhost:3003/products/' + id)
      .subscribe((data) => {
        this.toastr.success('Operation Success', 'Product deleted successfuly');
      });
  }
  post(data: any) {
    this.http
      .post('http://localhost:3003/products/', data)
      .subscribe((data) => {
        this.toastr.success('Operation Success', 'Product added successfully');
        this.router.navigateByUrl('/products');
      });
  }
}
