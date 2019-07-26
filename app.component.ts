import { Component, ElementRef } from '@angular/core';
import { MainComponentService } from './app.component.service';
import { MatInput, MatInputModule, MatFormField, MatFormFieldModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class MainComponent {
	public internshipList: string[] = [];
	public userInfo: UserInfo = new UserInfo();

  constructor(/* private mainComponentService: MainComponentService */) {}

  submitUserInfo(): void {
    this.clearAllInput();
    return; // As a proof of concept this method won't actually do anything...
  }

  clearAllInput(): void {
    this.userInfo = new UserInfo();
  }
}

export class UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  internshipSelection: string;
}
