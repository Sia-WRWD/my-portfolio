import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectTitle_options = [
    "Twitter Sentiment Analysis Model",
    "Glove Defect Detection System",
    "Suzume",
    "AGoogTrans",
    "CSS Components",
  ];
  projectDescription_options = [
    "A machine learning model for determining the sentiment of a tweet, if it is positive or negative.",
    "A system for detecting defects in different types of gloves (including silicone, medical & cloth).",
    "An E-commerce website that sells many different anime goodies with the admin, seller and customer roles.",
    "An Angular Translation Widget that incorporates Google Translator for translation of the entire website.",
    "A repository with different interesting CSS components or projects that are made for fun and with love."
  ];
  projectStack_options = [
    "Python",
    "MatLab",
    "Java HTML CSS JS",
    "Angular TypeScript",
    "HTML CSS JS"
  ];
  projectUrl_options = [
    "https://github.com/Sia-WRWD/TXSA-Twitter-Sentiment-Analysis",
    "https://github.com/Sia-WRWD/Glove-Defect-Detection-System",
    "https://github.com/Sia-WRWD/Suzume",
    "https://github.com/Sia-WRWD/AGoogTrans",
    "https://github.com/Sia-WRWD/css-components"
  ];
  image_options = [
    "https://imageio.forbes.com/specials-images/imageserve//62a0766c23ae4e5bfd39aea1/0x0.jpg?format=jpg&width=1200",
    "https://a-static.besthdwallpaper.com/suzume-s-door-locking-suzume-no-tojimari-wallpaper-1920x1080-104229_48.jpg",
    "https://img.freepik.com/premium-vector/languages-translator-flat-design-illustration_188398-209.jpg",
    "https://blog.alexdevero.com/wp-content/uploads/2015/02/css-code-e1517469545230.jpeg",
    "https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
    "https://img.rgstatic.com/content/show/0a360a01-a582-4a30-aba1-af6c5220c1a2/backdrop-1920.jpg"
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
