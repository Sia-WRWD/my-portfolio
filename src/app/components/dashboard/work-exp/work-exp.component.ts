import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {

  @ViewChild("jobTitle", { static: false }) jobTitle!: ElementRef;
  @ViewChild("jobCompany", {static: false}) jobCompany!: ElementRef;
  @ViewChild("jobDate", { static: false }) jobDate!: ElementRef;
  @ViewChild("jobDescription", { static: false }) jobDescription!: ElementRef;
  @ViewChild("jobCompanyImg", {static: false}) jobCompanyImg!: ElementRef;

  jobTitle_options = [
    "Freelancer",
    "Full-Stack Developer",
    "Front-End Developer",
    "Teacher",
    "Jack of All Trades"
  ];
  jobCompany_options = [
    "Myself",
    "Fusionex Group",
    "Qube Apps Solutions",
    "Blossom House English Centre",
    "Pasar Raya FM"
  ];
  jobCompanyLink_options = [
    "https://www.youtube.com/watch?v=Bv86GkKim3w&ab_channel=OrdinaryLad",
    "https://www.fusionexgroup.com/",
    "https://qubeapps.com/",
    "https://images.app.goo.gl/FWewHmLLEu8tAmJE6",
    "https://www.google.com/maps/contrib/114980013025852511644"
  ];
  jobDate_options = [
    "2021 - Now",
    "August 2022 - February 2023",
    "May 2021 - July 2021",
    "2019 - 2020",
    "2011 - 2019"
  ];
  jobDescription_options = [
    "Freelancing provided valuable opportunities to apply my knowledge in web development, create PowerPoint presentations, and complete assignments, enabling me to enhance my time management skills, earn additional income, and reinforce what I learned during my Diploma and Degree classes.",
    "Throughout my internship at Fusionex Group, I dedicated myself to refining my expertise in web application development. By utilizing Angular as the framework of choice, alongside MySQL for database management and C# for backend development, I embarked on a transformative journey as a full-stack developer.",
    "I had the opportunity to learn Angular 2+ and its available UI Component Libraries like Ant Design of Angular and Angular Material, gained valuable experience and skills during a 3-month web development internship, and contributed to an ongoing project related to a cashless payment application.",
    "I have Worked as an English Teacher and Receptionist, which allowed me to gain valuable experience and acquiring diverse skills including Customer Service, Teamwork, Time-Management, and Teaching, while also emphasizing the importance of patience in achieving success, especially nurturing students.",
    "I have worked in various roles, including cleaner, shelf-stocker, cashier, management, and more, acquiring skills in Customer Service, Teamwork, Time-Management, Problem-Solving, and People Management, while also learning valuable lessons about independence, personal responsibility, and the significance of effective communication."
  ];
  jobCompanyImg_options = [
    "https://static.fandomspot.com/images/07/7615/08-umaru-chan-himouto-umaru-chan.jpg",
    "https://www.fusionexus.com/wp-content/uploads/2018/11/IMG-fxlg.jpg",
    "../../../assets/pictures/others/qube.png",
    "../../../assets/pictures/others/blossom.png",
    "../../../assets/pictures/others/fm.png"
  ];

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.showFreelancer();
  }

  showFreelancer() {
    this.jobTitle.nativeElement.innerText = this.jobTitle_options[0];
    this.jobCompany.nativeElement.innerText = this.jobCompany_options[0];
    this.jobCompany.nativeElement.href = this.jobCompanyLink_options[0];
    this.jobDate.nativeElement.innerText = this.jobDate_options[0];
    this.jobDescription.nativeElement.innerText = this.jobDescription_options[0];
  }

  showFusionex() {
    this.jobTitle.nativeElement.innerText = this.jobTitle_options[1];
    this.jobCompany.nativeElement.innerText = this.jobCompany_options[1];
    this.jobCompany.nativeElement.href = this.jobCompanyLink_options[1];
    this.jobDate.nativeElement.innerText = this.jobDate_options[1];
    this.jobDescription.nativeElement.innerText = this.jobDescription_options[1];
  }

  showQube() {
    this.jobTitle.nativeElement.innerText = this.jobTitle_options[2];
    this.jobCompany.nativeElement.innerText = this.jobCompany_options[2];
    this.jobCompany.nativeElement.href = this.jobCompanyLink_options[2];
    this.jobDate.nativeElement.innerText = this.jobDate_options[2];
    this.jobDescription.nativeElement.innerText = this.jobDescription_options[2];
  }

  showBlossom() {
    this.jobTitle.nativeElement.innerText = this.jobTitle_options[3];
    this.jobCompany.nativeElement.innerText = this.jobCompany_options[3];
    this.jobCompany.nativeElement.href = this.jobCompanyLink_options[3];
    this.jobDate.nativeElement.innerText = this.jobDate_options[3];
    this.jobDescription.nativeElement.innerText = this.jobDescription_options[3];
  }

  showFM() {
    this.jobTitle.nativeElement.innerText = this.jobTitle_options[4];
    this.jobCompany.nativeElement.innerText = this.jobCompany_options[4];
    this.jobCompany.nativeElement.href = this.jobCompanyLink_options[4];
    this.jobDate.nativeElement.innerText = this.jobDate_options[4];
    this.jobDescription.nativeElement.innerText = this.jobDescription_options[4];
  }

}
