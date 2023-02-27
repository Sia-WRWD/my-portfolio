import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {langName: "MySQL", langSrc: "../../../../assets/pictures/skills/mysql.png"},
    {langName: "ExpressJS", langSrc: "../../../../assets/pictures/skills/expressjs.jpg"},
    {langName: "Angular", langSrc: "../../../../assets/pictures/skills/angular.png"},
    {langName: "NodeJS", langSrc: "../../../../assets/pictures/skills/nodejs.png"},
    {langName: "ReactJS", langSrc: "../../../../assets/pictures/skills/react.png"},
    {langName: "Firebase", langSrc: "../../../../assets/pictures/skills/firebase.png"},
    {langName: "MaterialUI", langSrc: "../../../../assets/pictures/skills/materialui.png"},
    {langName: "NgZorro", langSrc: "../../../../assets/pictures/skills/ngzorro.png"},
    {langName: "Bootstrap", langSrc: "../../../../assets/pictures/skills/bootstrap.png"},
    {langName: "Sass", langSrc: "../../../../assets/pictures/skills/sass.png"},
    {langName: "HTML5", langSrc: "../../../../assets/pictures/skills/html.jpg"},
    {langName: "CSS3", langSrc: "../../../../assets/pictures/skills/css3.png"},
    {langName: "Java", langSrc: "../../../../assets/pictures/skills/java.png"},
    {langName: "JavaScript", langSrc: "../../../../assets/pictures/skills/js.png"},
    {langName: "TypeScript", langSrc: "../../../../assets/pictures/skills/ts.png"},
    {langName: "PHP", langSrc: "../../../../assets/pictures/skills/php.png"},
    {langName: "Python", langSrc: "../../../../assets/pictures/skills/python.png"},
    {langName: "C++", langSrc: "../../../../assets/pictures/skills/cpp.png"},
    {langName: "SQL", langSrc: "../../../../assets/pictures/skills/sql.png"},
    {langName: "NoSQL", langSrc: "../../../../assets/pictures/skills/nosql.png"},
    {langName: "Heroku", langSrc: "../../../../assets/pictures/skills/heroku.png"},
    {langName: "NPM", langSrc: "../../../../assets/pictures/skills/npm.png"},
    {langName: "Netlify", langSrc: "../../../../assets/pictures/skills/netlify.png"},
    {langName: "GitHub", langSrc: "../../../../assets/pictures/skills/github.png"},
    {langName: "Google Cloud", langSrc: "../../../../assets/pictures/skills/cloud.png"},
    {langName: "Appsheet", langSrc: "../../../../assets/pictures/skills/appsheet.png"},
    {langName: "Git VCS", langSrc: "../../../../assets/pictures/skills/git.png"},
    {langName: "R", langSrc: "../../../../assets/pictures/skills/r.png"},
    {langName: "Figma", langSrc: "../../../../assets/pictures/skills/figma.png"},
    {langName: "LabView", langSrc: "../../../../assets/pictures/skills/labview.png"},
  ]

  ngOnInit() {

  }
}
