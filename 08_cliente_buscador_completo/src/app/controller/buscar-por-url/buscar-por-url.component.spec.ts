import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorUrlComponent } from './buscar-por-url.component';

describe('BuscarPorUrlComponent', () => {
  let component: BuscarPorUrlComponent;
  let fixture: ComponentFixture<BuscarPorUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarPorUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPorUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
