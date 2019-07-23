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
  public fileText

  public columns = ["title", "location"];

  constructor(/* private mainComponentService: MainComponentService */ private http: HttpClient) { }

  ngOnInit() {
    var self = this;
    this.parseFile()
  }

  parseFile() {
    
    //var internshipOpportunity1 = new internship("Human Resources Internship", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=148595&localeCode=en-us");
    //this.internshipList.push(internshipOpportunity1);
    //internshipOpportunity1 = new internship("Developer Consultant Intern", "RS-Belgrade-Belgrade Bulevar Milutina Milankovica 136b-4160 ", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147071&localeCode=en-us");
    //this.internshipList.push(internshipOpportunity1);
    //internshipOpportunity1 = new internship("Internship - Quality Assurance Analyst", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147056&localeCode=en-us");
    //this.internshipList.push(internshipOpportunity1);
    //internshipOpportunity1 = new internship("Internship - Business Analyst", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147053&localeCode=en-us");
    //this.internshipList.push(internshipOpportunity1);
    //internshipOpportunity1 = new internship("Internship - Technical Analyst", "RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160", "https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147049&localeCode=en-us ");
    //this.internshipList.push(internshipOpportunity1);

    //var opportunityString = this.getStringOfInternships();

    var opportunityString = "Human Resources InternshipRS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=148595&localeCode=en-us Developer Consultant Intern RS - Belgrade - Belgrade Bulevar Milutina Milankovica 136b - 4160 https://careers.peopleclick.com/careerscp/client_FISGlobal/external/jobDetails/jobDetail.html?jobPostId=147071&localeCode=en-us";
    var internshipBlocks: string[] = opportunityString.split("en-us"); // know the end of the hyperlink and end of entry by "en-us" => each internship is one place in the array
    var opportunity: internship = new internship();

    for (var i = 0; i < internshipBlocks.length - 1; i++) {
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
    return this.http.get("./internships.txt");
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
}
