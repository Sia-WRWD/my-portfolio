import { Component, ElementRef, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationDetails = [
    {
      name: "Asia Pacific University",
      course: "Bachelor of Computer Science (HONS) (Intelligent Systems)",
      year: "2021 - 2023",
      imgSrc: "https://www.easyuni.my/media/institution/photo/2017/12/19/9._IMG_0645_preview.jpeg.600x400_q85.jpg",
      url: "https://www.apu.edu.my/",
      status: "Pursuing",
      statusColor: "#F9F871"
    },
    {
      name: "Asia Pacific University",
      course: "Diploma in ICT with A Specialism in Software Engineering",
      year: "2019 - 2021", 
      imgSrc: "https://huacomm.com.my/wp-content/uploads/2020/05/apu_still01_entrance_0-1.jpg",
      url: "https://www.apu.edu.my/",
      status: "Completed",
      statusColor: "#00FF00"
    },
  ];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(".tilt-object"), { max: 20, speed: 150, scale: 1.05 }
    );
  }
}
