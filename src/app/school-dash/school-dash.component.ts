import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { SchoolData } from './school.model';

@Component({
  selector: 'app-school-dash',
  templateUrl: './school-dash.component.html',
  styleUrls: ['./school-dash.component.css'],
})
export class SchoolDashComponent implements OnInit {
  formValue!: FormGroup;
  schoolModelObj: SchoolData = new SchoolData();
  allSchoolData: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
    this.getAllData()
  }
  //Now Subscribing our data which is maped via Services...
  addResto() {
    this.schoolModelObj.name = this.formValue.value.name;
    this.schoolModelObj.email = this.formValue.value.email;
    this.schoolModelObj.mobile = this.formValue.value.mobile;
    this.schoolModelObj.address = this.formValue.value.address;
    this.schoolModelObj.services = this.formValue.value.services;

    this.api.postSchool(this.schoolModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Restaurent Records Added SuccessFull');
        this.formValue.reset();
        this.getAllData();
      },
      (err) => {
        alert('kuch ');
      }
    );
  }

  getAllData() {
    this.api.getSchool().subscribe((res) => {
      this.allSchoolData = res;
    });
  }

  //delete records
  deleteResto(data: any) {
    this.api.deleteSchool(data.id).subscribe((res)=>{
















      
      alert("School record deleted")
      this.getAllData();
  })
  }
}
