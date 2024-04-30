import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLoginComponent } from './render-login.component';

describe('RenderLoginComponent', () => {
  let component: RenderLoginComponent;
  let fixture: ComponentFixture<RenderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenderLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
