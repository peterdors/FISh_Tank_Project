import { Component, ElementRef, OnInit } from '@angular/core';
import { URL } from 'url';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
// import { MainComponentService } from './app.component.service';
//import require('internships.txt';

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
    this.parseFile()
    this.printInternships();
  }

  printInternships() {
    console.log("length is " + this.internshipList.length)
    for (var index = 0; index < this.internshipList.length; index++) {
      console.log("printing index: " + index);
      console.log("Title: " + this.internshipList[index].title);
      console.log("Location: " + this.internshipList[index].location);
      console.log("Hyperlink: " + this.internshipList[index].hyperlink);
    }
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
      console.log("starting internship " + i);
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
    rawFile.open("GET", "assets/internships.txt", true);
    rawFile.send();
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
        aString = rawFile.responseText;
      }
    }
    aString = "Human Resources InternshipRS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=148595&localeCode=en-us Developer Consultant Intern RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147071&localeCode=en-usInternship - Quality Assurance Analyst RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147056&localeCode=en-us Internship - Business Analyst RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147053&localeCode=en-us Internship - Technical Analyst RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147049&localeCode=en-us Internship - C++ Developer RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147051&localeCode=en-us Internship - DevOps RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147047&localeCode=en-us Internship - Java Developer RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147046&localeCode=en-us Internship - .NET Developer RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147044&localeCode=en-us Recruitment InternshipRS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147052&localeCode=en-us";
    console.log("aString is " + aString);
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
