import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  list(): Observable<any[]> {
    return this.http.get('http://localhost:3003/categories') as Observable<
      any[]
    >;
  }
  delete(id: String) {
    console.log('http://localhost:3003/categories/' + id);
    this.http
      .delete('http://localhost:3003/categories/' + id)
      .subscribe((data) => {
        this.toastr.success(
          'Operation Success',
          'Category deleted successfully'
        );
      });
  }
  post(data: any) {
    this.http
      .post('http://localhost:3003/categories', data)
      .subscribe((data) => {
        this.toastr.success('Operation Success', 'Categorie added successfully');
        this.router.navigateByUrl('/categories');
      });
  }
}
