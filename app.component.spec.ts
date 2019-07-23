import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MainComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fish-tank-project'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('fish-tank-project');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to fish-tank-project!');
  });
});
