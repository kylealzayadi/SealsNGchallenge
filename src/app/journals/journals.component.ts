import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  public form: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient) { }
  public journals = [];
  ngOnInit() {
    this.getData();
    this.form = this.fb.group({
      title :['', Validators.required],
      content :['', Validators.required]
    })
  }
  
  
 
 onSubmit(){
  this.journals.push(this.form.value);
  console.log(this.journals)
  
}
getData(){
  this.http.get('http://localhost:3000/chicken', {}).subscribe((result: any) =>{
    console.log(result);
    this.journals= result;
  }),
  (err) => {
    console.log(err)
  };
}
  login(){
    const payload ={
      email: 'roberto@urbantxt.com',
      password: 'kyle is cool'
    }
  }
  
}

