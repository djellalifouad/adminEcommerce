import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiCategorie: CategoriesService,
    private productService: ProductsService,
    private router2: ActivatedRoute
  ) {}

  addProduct: FormGroup;
  formData = new FormData();
  listCategorie: any[] = [];
  id :  String ;
  product :  any ;

  ngOnInit(): void {
    this.id = this.router2.snapshot.paramMap.get('id') ?? '';
    this.apiCategorie.list().subscribe((data) => {
      this.listCategorie = data;
    this.productService.getOneProduct(this.id).subscribe((data) => {
      this.product = data;
        this.addProduct = this.fb.group({
          nom: [
            this.product.nom,
            [Validators.required, Validators.required, Validators.minLength(4)],
          ],
          desc: [
            this.product.desc,
            [Validators.required, Validators.minLength(4)],
          ],
          categorie: [this.product.categorie._id, [Validators.required]],
          qty: [this.product.qty, [Validators.required]],
          memory: [this.product.memory, [Validators.required]],
          screenType: [
            this.product.screenType,
            [Validators.required, Validators.required],
          ],
          processor: [
            this.product.processor,
            [Validators.required, Validators.required],
          ],
          ram: [this.product.ram, [Validators.required]],
          price: [this.product.price, [Validators.required]],
        });
    });
    });
  }
  get f() {
    return this.addProduct.controls;
  }
  clickAddProduct = () => {
    this.productService.patch(this.id,this.addProduct.value);
  };
}
