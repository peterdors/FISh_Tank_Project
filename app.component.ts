import { Component, ElementRef, OnInit } from '@angular/core';
import { URL } from 'url';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit {
  public internshipList: internship[] = [];
  public userInfo: UserInfo = new UserInfo();
  public fileText;


  public columns = ["title", "location"];

  constructor(/* private mainComponentService: MainComponentService */ private http: HttpClient) { }

  ngOnInit() {
    var self = this;
    this.parseFile();
  }

  openInstagramPage() {
    window.open("https://www.instagram.com");
  }

  submitUserInfo(): void {
    this.clearAllInput();
    return; // As a proof of concept this method won't actually do anything...
  }

  clearAllInput(): void {
    this.userInfo = new UserInfo();
  }

  parseFile() {
    var opportunityString =  this.getStringOfInternships();
    var internshipBlocks: string[] = opportunityString.split("en-us"); 
    for (var i = 0; i < internshipBlocks.length - 1; i++) {
      var opportunity: internship = new internship("", "", "");
      internshipBlocks[i] = internshipBlocks[i] + "en-us";
      var internshipTitle: string[] = internshipBlocks[i].split("RS");
      opportunity.title = internshipTitle[0];
      internshipTitle[1] = "RS" + internshipTitle[1];
      var internshipLocation: string[] = internshipTitle[1].split("https://");
      internshipLocation[1] = "https://" + internshipLocation[1];
      opportunity.location = internshipLocation[0];
      opportunity.hyperlink = internshipLocation[1];
      this.internshipList.push(opportunity);
    }
  }

  getStringOfInternships() {
    var aString = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "assets/internships.txt", false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
        aString = rawFile.responseText;
      }
    }
    rawFile.send(null);
    return aString;
  }

  stateChanged(rawFile: XMLHttpRequest) {
    if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
      return rawFile.responseText;
    }
  }

  goToHyperlink(opportunity: internship) {
    window.open(opportunity.hyperlink)
  }

}

export class UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  internshipSelection: string;
}

export class internship {
  public title: string;
  public location: string;
  public hyperlink: string;

  constructor(title: string, location: string, hyperlink: string) {
    this.title = "";
    this.location = "";
    this.hyperlink = "";
  }
}
