import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCenterComponent } from "app/video-center/video-center.component";


describe('VideoCenterComponent', () => {
  let component: VideoCenterComponent;
  let fixture: ComponentFixture<VideoCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
