import { StudentSchemeapplyComponent } from './student-schemeapply/student-schemeapply.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { InstituteStudentViewComponent } from './institute-student-view/institute-student-view.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { InstituteDashComponent } from './institute-dash/institute-dash.component';
import { NodalInstituteViewComponent } from './nodal-institute-view/nodal-institute-view.component';
import { NodalProfileComponent } from './nodal-profile/nodal-profile.component';
import { NodalDashComponent } from './nodal-dash/nodal-dash.component';
import { MinistryViewNodalComponent } from './ministry-view-nodal/ministry-view-nodal.component';
import { MinistryProfileComponent } from './ministry-profile/ministry-profile.component';
import { MinistryDashComponent } from './ministry-dash/ministry-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodalRegisterComponent } from './nodal-register/nodal-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SchemeRegisterComponent } from './scheme-register/scheme-register.component';
import { ScholarshipformRegisterComponent } from './scholarshipform-register/scholarshipform-register.component';
import { MinistryFormVerificationComponent } from './ministry-form-verification/ministry-form-verification.component';
import { MinistryViewInstituteComponent } from './ministry-view-institute/ministry-view-institute.component';
import { NodalFormViewComponent } from './nodal-form-view/nodal-form-view.component';
import { InstituteFormViewComponent } from './institute-form-view/institute-form-view.component';
import { combineLatest } from 'rxjs';
import { InstituteStudentVerifyComponent } from './institute-student-verify/institute-student-verify.component';
import { DocumentComponent } from './document/document.component';
import { InstituteFormVerifyComponent } from './institute-form-verify/institute-form-verify.component';
import { NodalFormVerifyComponent } from './nodal-form-verify/nodal-form-verify.component';
import { NodalInstituteVerifyComponent} from './nodal-institute-verify/nodal-institute-verify.component';
import { MinistryInstituteVerifyComponent } from './ministry-institute-verify/ministry-institute-verify.component';
import { MinistryFormVerifyComponent } from './ministry-form-verify/ministry-form-verify.component';
import { MinistryNodalVerifyComponent } from "./ministry-nodal-verify/ministry-nodal-verify.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'freshStudent', component: StudentRegisterComponent },
  { path: 'freshInstitute', component: InstituteRegisterComponent },
  { path: 'studentLogin', component: StudentLoginComponent },
  {
    path: 'studentDashboard',
    component: StudentDashComponent,
    children: [
      { path: 'profile', component: StudentProfileComponent },
      { path: 'applyScheme', component: ScholarshipformRegisterComponent },
      { path: 'applyScheme/:schemeId', component: StudentSchemeapplyComponent },
      {path:'documentUpload', component:DocumentComponent}

    ]
  },
  { path: 'instituteLogin', component: InstituteLoginComponent },
  {
    path: 'instituteDashboard',
    component: InstituteDashComponent,
    children: [
      { path: 'profile', component: InstituteProfileComponent },
      { path: 'formVerification', component: InstituteFormViewComponent },
      { path: 'formVerification/formDetails/:id', component: InstituteFormVerifyComponent },
      { path: 'studentVerification', component: InstituteStudentViewComponent },
      { path: 'studentVerification/studentDetails/:id', component: InstituteStudentVerifyComponent }
    ]
  },
  { path: 'nodalLogin', component: NodalLoginComponent },
  {
    path: 'nodalDashboard',
    component: NodalDashComponent,
    children: [
      { path: 'profile', component: NodalProfileComponent },
      { path: 'formVerification', component: NodalFormViewComponent },
      { path: 'instituteVerification', component: NodalInstituteViewComponent },
      { path: 'formVerification/formDetails/:id', component: NodalFormVerifyComponent },
      { path: 'instituteVerification/instituteDetails/:id', component: NodalInstituteVerifyComponent }
    ]
  },
  { path: 'ministryLogin', component: MinistryLoginComponent },
  {
    path: 'ministryDashboard',
    component: MinistryDashComponent,
    children: [
      { path: 'profile', component: MinistryProfileComponent },
      { path: 'freshNodal', component: NodalRegisterComponent },
      { path: 'freshScheme', component: SchemeRegisterComponent },
      { path: 'formVerification', component: MinistryFormVerificationComponent },
      {path: 'formVerification/formDetails/:id', component:MinistryFormVerifyComponent},
      { path: 'viewNodalOfficers', component: MinistryViewNodalComponent },
      {path: 'viewNodalOfficers/nodalDetails/:id', component: MinistryNodalVerifyComponent },
      { path: 'formInstitute', component: MinistryViewInstituteComponent },
      {path: 'formInstitute/instituteDetails/:id', component: MinistryInstituteVerifyComponent}
    ]
  },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent } //Put this always in last 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
