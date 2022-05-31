import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProductsComponent } from './liste-products/liste-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListeOrdersComponent } from './liste-orders/liste-orders.component';
const routes: Routes = [
  {
    path: 'products',
    component: ListeProductsComponent,
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
  },
  {
    path: 'categories',
    component: ListeCategoriesComponent,
  },
  {
    path: 'addCateogire',
    component: AddCategorieComponent,
  },
  {
    path: 'updateProduct/:id',
    component: UpdateProductComponent,
  },
  {
    path: 'order',
    component: ListeOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
