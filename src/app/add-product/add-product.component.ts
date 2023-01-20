import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  file: any;
  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  constructor(
    private fb: FormBuilder,
    private apiCategorie: CategoriesService,
    private productService: ProductsService
  ) {}
  addProduct: FormGroup;
  formData = new FormData();
  listCategorie: any[] = [];
  ngOnInit(): void {
    this.apiCategorie.list().subscribe((data) => {
      this.listCategorie = data;
      console.log(this.listCategorie);
    });
    this.addProduct = this.fb.group({
      nom: [
        '',
        [Validators.required, Validators.required, Validators.minLength(4)],
      ],
      desc: ['', [Validators.required, Validators.minLength(4)]],
      categorie: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      memory: ['', [Validators.required]],
      screenType: ['', [Validators.required, Validators.required]],
      processor: ['', [Validators.required, Validators.required]],
      ram: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  get f() {
    return this.addProduct.controls;
  }
  clickAddProduct = () => {
    const formData = new FormData();
    formData.append('image', this.file, this.file.name);
    formData.append('nom', this.addProduct.value.nom);
    formData.append('price', this.addProduct.value.price);
    formData.append('desc', this.addProduct.value.desc);
    formData.append('categorie', this.addProduct.value.categorie);
    formData.append('qty', this.addProduct.value.qty);
    formData.append('memory', this.addProduct.value.memory);
    formData.append('screenType', this.addProduct.value.screenType);
    formData.append('processor', this.addProduct.value.processor);
    formData.append('ram', this.addProduct.value.ram);
    formData.append('pricee', this.addProduct.value.price);
    this.productService.post(formData);
  };
}
