import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOrdersComponent } from './liste-orders.component';

describe('ListeOrdersComponent', () => {
  let component: ListeOrdersComponent;
  let fixture: ComponentFixture<ListeOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
