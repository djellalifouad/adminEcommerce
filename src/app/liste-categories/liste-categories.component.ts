import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css'],
})
export class ListeCategoriesComponent implements OnInit {
  list: any[] = [];
  constructor(private api: CategoriesService, private router: Router) {
    this.api.list().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  ngOnInit(): void {}
  removeCategorie = async (id: String) => {
    await this.api.delete(id);
    this.api.list().subscribe((data) => {
      this.list = data;
    });
  };
}
