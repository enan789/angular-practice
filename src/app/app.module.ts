import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseInfoService } from './course-info.service';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DynamicCategoriesComponent } from './dynamic-categories/dynamic-categories.component';

const appRoutes: Routes = [
  {path:'Dropdowns', component:DropdownsComponent},
  {path:'DynamicCourses', component:DynamicCategoriesComponent},
  {path:'ContactForm', component:ContactFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    DropdownsComponent,
    DynamicCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CourseInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
