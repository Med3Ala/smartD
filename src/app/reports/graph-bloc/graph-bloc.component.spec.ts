import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBlocComponent } from './graph-bloc.component';

describe('GraphBlocComponent', () => {
  let component: GraphBlocComponent;
  let fixture: ComponentFixture<GraphBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
