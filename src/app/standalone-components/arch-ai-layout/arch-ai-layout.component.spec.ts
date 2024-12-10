import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchAiLayoutComponent } from './arch-ai-layout.component';

describe('ArchAiLayoutComponent', () => {
  let component: ArchAiLayoutComponent;
  let fixture: ComponentFixture<ArchAiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchAiLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchAiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
