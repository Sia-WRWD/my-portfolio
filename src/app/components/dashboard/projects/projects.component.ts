import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projectTitle_options = [
    "Glove Defect Detection System",
    "Suzume",
    "AGoogTrans",
    "CSS Components",
    "Image Colour Detection",
    "Baby Ghost Melbhack"
  ];
  projectDate_options = [
    "28 May 2023",
    "28 May 2023",
    "25 February 2023",
    "2 January 2023",
    "14 August 2022",
    "23 April 2022"
  ];
  projectUrl_options = [
    "https://github.com/Sia-WRWD/Glove-Defect-Detection-System",
    "https://github.com/Sia-WRWD/Suzume",
    "https://github.com/Sia-WRWD/AGoogTrans",
    "https://github.com/Sia-WRWD/css-components",
    "https://github.com/Sia-WRWD/image-colour-detection",
    "https://github.com/Sia-WRWD/Baby-Ghost-MelbHack"
  ];
  image_options = [
    "https://imageio.forbes.com/specials-images/imageserve//62a0766c23ae4e5bfd39aea1/0x0.jpg?format=jpg&width=1200",
    "https://a-static.besthdwallpaper.com/suzume-s-door-locking-suzume-no-tojimari-wallpaper-1920x1080-104229_48.jpg",
    "https://img.freepik.com/premium-vector/languages-translator-flat-design-illustration_188398-209.jpg",
    "https://blog.alexdevero.com/wp-content/uploads/2015/02/css-code-e1517469545230.jpeg",
    "https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
    "https://img.rgstatic.com/content/show/0a360a01-a582-4a30-aba1-af6c5220c1a2/backdrop-1920.jpg"
  ];

  i = 0;
  intervalId: any;
  @ViewChild("projectTitle", { static: false }) projectTitle!: ElementRef;
  @ViewChild("projectDate", { static: false }) projectDate!: ElementRef;
  @ViewChild("projectUrl", {static: false}) projectUrl!: ElementRef;
  @ViewChild("carouselWrapper", { static: false }) carousel!: ElementRef;
  @ViewChild("menu", { static: false }) mainMenu!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.optionNextClicked();
    }, 5000); // Change the interval duration as per your preference
  }

  stopCarousel(): void {
    clearInterval(this.intervalId);
  }

  optionNextClicked(): void {
    this.i = (this.i + 1) % this.projectTitle_options.length;
    this.projectTitle.nativeElement.dataset.nextText = this.projectTitle_options[this.i];
    this.projectDate.nativeElement.dataset.nextText = this.projectDate_options[this.i];
    this.mainMenu.nativeElement.style.backgroundImage = this.image_options[this.i];
    this.projectUrl.nativeElement.href = this.projectUrl_options[this.i];
    this.carousel.nativeElement.classList.add("anim-next");

    setTimeout(() => {
      this.mainMenu.nativeElement.style.backgroundImage = `url(${this.image_options[this.i]})`;
    }, 455);

    setTimeout(() => {
      this.projectTitle.nativeElement.innerText = this.projectTitle_options[this.i];
      this.projectDate.nativeElement.innerText = this.projectDate_options[this.i];
      this.projectUrl.nativeElement.href = this.projectUrl_options[this.i];
      this.carousel.nativeElement.classList.remove("anim-next");
    }, 650);
  }

  optionPreviousClicked(): void {
    this.i = (this.i === 0 ? this.projectTitle_options.length : this.i) - 1;
    this.projectTitle.nativeElement.dataset.previousText = this.projectTitle_options[this.i];
    this.projectDate.nativeElement.dataset.previousText = this.projectDate_options[this.i];
    this.mainMenu.nativeElement.style.backgroundImage = this.image_options[this.i];
    this.projectUrl.nativeElement.href = this.projectUrl_options[this.i];
    this.carousel.nativeElement.classList.add("anim-previous");

    setTimeout(() => {
      this.mainMenu.nativeElement.style.backgroundImage = `url(${this.image_options[this.i]})`;
    }, 455);

    setTimeout(() => {
      this.projectTitle.nativeElement.innerText = this.projectTitle_options[this.i];
      this.projectDate.nativeElement.innerText = this.projectDate_options[this.i];
      this.projectUrl.nativeElement.href = this.projectUrl_options[this.i];
      this.carousel.nativeElement.classList.remove("anim-previous");
    }, 650);
  }
}
