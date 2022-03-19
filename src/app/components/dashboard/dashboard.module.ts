import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';

import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        IntroComponent,
        AboutComponent,
        WorkExpComponent,
        ProjectsComponent,
        ContactsComponent,
        FooterComponent
    ],
    providers: [

    ],
    exports: [
        IntroComponent,
        AboutComponent,
        WorkExpComponent,
        ProjectsComponent,
        ContactsComponent,
        FooterComponent,
    ]
})
export class DashBoardModule {}