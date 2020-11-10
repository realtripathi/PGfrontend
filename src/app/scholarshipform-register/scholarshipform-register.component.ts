import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ScholarshipForm } from "../scholarship-form";
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-scholarshipform-register',
  templateUrl: './scholarshipform-register.component.html',
  styleUrls: ['./scholarshipform-register.component.css']
})
export class ScholarshipformRegisterComponent implements OnInit {

  scholarshipFormModel = new ScholarshipForm();
  constructor(private studentService: StudentService,
    private router: Router) {
    this.studentId = sessionStorage.getItem('studentId');
  }

  formExits = true;

  ngOnInit(): void {
    this.studentService.showProfile(this.studentId).subscribe(data => this.studentModel = data);
    if(this.studentModel.form == null){
      this.formExits =false;
    }
  }

  studentId: any;
  studentModel = new Student();

  schemes: any[] = [
    { schemeId: "1001", name: "Merit-cum-Means based", details: "The Maharashtra DTE Scholarship gives the opportunity to the students belonging to the backwards categories to study in the government and private colleges after completion of their Class 12th." },
    { schemeId: "1002", name: "PRAGATI SCHOLARSHIP ", details: "‘One Girl’ per family and it can be extended for Two Girl Child per family where the family income is less than Rs. 8 Lakh /annum (In case of married girl child, the income of parents/ in laws whichever is higher is to be considered)." },
    { schemeId: "1003", name: "NTSE (National Talent Search Examination)", details: "Candidates must be an Indian national" },
  ];

  scheme: any;
  onSelect(i: any) {
    this.scheme = i;
    //console.log(`aaaa=${JSON.stringify(this.selectedItem)}`);
  }

  onApply(schemeId: number) {
    this.router.navigate(['/studentDashboard/applyScheme', schemeId]);
  }

}
