import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaMtComponent } from './nota-mt.component';

describe('NotaMtComponent', () => {
  let component: NotaMtComponent;
  let fixture: ComponentFixture<NotaMtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaMtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
