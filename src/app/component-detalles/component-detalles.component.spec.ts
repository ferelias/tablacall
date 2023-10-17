import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDetallesComponent } from './component-detalles.component';

describe('ComponentDetallesComponent', () => {
  let component: ComponentDetallesComponent;
  let fixture: ComponentFixture<ComponentDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDetallesComponent]
    });
    fixture = TestBed.createComponent(ComponentDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
