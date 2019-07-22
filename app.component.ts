import { Component, ElementRef, OnInit } from '@angular/core';
import { URL } from 'url';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
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
  public fileText

  public columns = ["title", "location"];

  constructor(/* private mainComponentService: MainComponentService */ private http: HttpClient) { }

  ngOnInit() {
    var self = this;
    // call the python script to create the latest version of the internships.txt file
    this.parseFile()
  }

  parseFile() {
    
    var internshipOpportunity1 = new internship("Human Resources Internship RS", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=148595&localeCode=en-us");
    this.internshipList.push(internshipOpportunity1);
    internshipOpportunity1 = new internship("Developer Consultant Intern", "RS-Belgrade-Belgrade Bulevar Milutina Milankovica 136b-4160 ", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147071&localeCode=en-us");
    this.internshipList.push(internshipOpportunity1);
    internshipOpportunity1 = new internship("Internship - Quality Assurance Analyst", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147056&localeCode=en-us");
    this.internshipList.push(internshipOpportunity1);
    internshipOpportunity1 = new internship("Internship - Business Analyst", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147053&localeCode=en-us");
    this.internshipList.push(internshipOpportunity1);
    internshipOpportunity1 = new internship("Internship - Technical Analyst", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147049&localeCode=en-us ");
    this.internshipList.push(internshipOpportunity1);
    //var internshipBlocks: string[] = a.split("en-us"); // know the end of the hyperlink and end of entry by "en-us"
    //for (var i = 0; i < internshipBlocks.length; i++) {
    //  var opportunity: internship;
    //  var internshipTitle: string[] = a.split("RS");   // first thing in this array (index = 0) will be the title => know the end of title by RS
    //  opportunity.title = internshipTitle[0];
    //  var internshipLocation: string[] = internshipTitle[1].split("https://");  // the second thing (index = 1) is the hyperlink => know the end of the location by https://
    //  opportunity.location = internshipLocation[0];
    //  opportunity.hyperlink = internshipLocation[1];
    //  console.log("Title: ", opportunity.title);
    //  console.log("Location: ", opportunity.location);
    //  this.internshipList.push(opportunity);
    //}
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

  constructor(newTitle: string, newLocation: string, newHyperlink: string) {
    this.title = newTitle;
    this.location = newLocation;
    this.hyperlink = newHyperlink;
  }
}
