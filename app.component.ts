import { Component } from '@angular/core';
// import { MainComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class MainComponent {
	public internshipList: string[] = [];
	public userInfo: UserInfo[] = [];
	
	constructor(/* private mainComponentService: MainComponentService */) {}
}

export class UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  internshipSelection: string;
}