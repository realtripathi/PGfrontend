import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Institute } from '../institute';
import swal from 'sweetalert';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
      
  }

  studStates = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  studDistricts = ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule',' Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'];

  studGenders = ['Male','Female', 'Other'];

  studentModel = new Student();
  institute_id: Number;
  studnetstateInvalid = true;
  studnetdistrictInvalid = true;
  studnetGendersInvalid = true;
  studPasswordNotMatch = true;
  instituteList = []

  validatestudState(value){
    if(value == ''){
      this.studnetstateInvalid = true;
    }
    else{
      this.studnetstateInvalid = false;
    }
  }

  validatestudDistrict(value){
    if(value == ''){
      this.studnetdistrictInvalid = true;
    }
    else{
      this.studnetdistrictInvalid = false;
    }
  }

  validatestudGender(value){
    if(value == ''){
      this.studnetGendersInvalid = true;
    }
    else{
      this.studnetGendersInvalid = false;
    }
  }

  studConfirmPassword(value1, value2){
    if(value1 == value2){
      this.studPasswordNotMatch = false;
    }
    else{
      this.studPasswordNotMatch = true;
    }
  }

  minDate = new Date("01-01-2000")
  maxDate = new Date();

  register() {
    //console.log(this.studentModel);
    this.studentService.register(this.studentModel,this.institute_id).subscribe(data => {
     //alert(JSON.stringify(data));
     if(data.status == 'SUCCESS') {
       swal("Registration Successful");
       this.router.navigate(['studentLogin']);
     }
     else {
       //this.router.navigate(['error']);
       swal(data.message);
     }
   })
   }

}
