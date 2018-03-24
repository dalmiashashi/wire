import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { browser, element, by  } from 'protractor';


import { LoginComponent } from './login.component';

describe('LoginComponent', function() => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
    
    
    beforeAll(function() {
    
      console.log('Before Login');
    });
    
    beforeEach( function() {
      element(by.id('username')).clear;
    });
  
    it('user mst be aloe to login', fubction(){
      element(by.id('username')).clear;
    
      element(by.id('username')).sendKeys('shashi');
      element(by.id('password')).sendKeys('shashi');
      
      
      
      element(by.xpath('//button')).click();

      browser.sleep(2000);
      
      expect(browser.getCurrentUrl()).toContain('');
      expect(browser.getPageSource()).toContain('Login');

      expect();
      
      
    });
  
    browser.get('http://localhost:4200/#');
  
    
    

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
