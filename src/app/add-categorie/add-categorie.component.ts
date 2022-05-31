import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css'],
})
export class AddCategorieComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiCategorie: CategoriesService
  ) {}
  addProduct: FormGroup;
  ngOnInit(): void {
    this.addProduct = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.required, Validators.minLength(4)],
      ],
    });
  }
  get f() {
    return this.addProduct.controls;
  }
  clickAddProduct = () => {
    this.apiCategorie.post(this.addProduct.value);
  };
}
