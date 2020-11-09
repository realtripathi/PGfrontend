import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScholarshipForm } from "../scholarship-form";
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-schemeapply',
  templateUrl: './student-schemeapply.component.html',
  styleUrls: ['./student-schemeapply.component.css']
})
export class StudentSchemeapplyComponent implements OnInit {

  maritalStatusCategory=['Single','Married','Divorced','Other'];
  religionCategory=['Buddhism','Christianity','Hinduism','Islam','Jainism','Sikhism','Other'];
  disabilityCategory=['Disabled','Not Disabled'];

  maritalStatusInvalid=true;
  religionStatusInvalid=true;
  disabilityStatusInavlid=true;

  public scholarshipFormModel=new ScholarshipForm();

  instituteID: String;

  valueSet(value){
    this.instituteID = value;
  }

  schemeUid;
  
  
  constructor(private studentService:StudentService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.schemeUid = parseInt(this.route.snapshot.paramMap.get('schemeId'));
    this.scholarshipFormModel.schemeUid=this.schemeUid;
    this.scholarshipFormModel.aadharNumber=parseInt(sessionStorage.getItem('studentId'));
  }

  // applyScheme(){
  //   console.log(this.scholarshipFormModel);
  //   this.studentService.applyScheme(this.scholarshipFormModel,this.instituteID,this.schemeId,this.scholarshipFormModel.aadharNumber).subscribe(data => {
  //    //alert(JSON.stringify(data));
  //    if(data.status == 'SUCCESS') {
  //      this.router.navigate(['studentProfile']);
  //    }
  //    else {
  //      //this.router.navigate(['error']);
  //    }
  //  })
  // }
  validateMaritalStatus(value){
    if(value == ''){
      this.maritalStatusInvalid = true;
    }
    else{
      this.maritalStatusInvalid = false;
    }
  }

  validateReligionStatus(value){
    if(value == ''){
      this.religionStatusInvalid = true;
    }
    else{
      this.religionStatusInvalid = false;
    }
  }

  validateDisabilityStatus(value){
    if(value == ''){
      this.disabilityStatusInavlid = true;
    }
    else{
      this.disabilityStatusInavlid = false;
    }
  }

  onSubmitClick():void{
    sessionStorage.setItem('form',JSON.stringify(this.scholarshipFormModel));
    this.router.navigate(['/studentDashboard/documentUpload']);
  }
}
