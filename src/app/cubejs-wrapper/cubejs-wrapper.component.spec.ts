import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubejsWrapperComponent } from './cubejs-wrapper.component';

describe('CubejsWrapperComponent', () => {
  let component: CubejsWrapperComponent;
  let fixture: ComponentFixture<CubejsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubejsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubejsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
