import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  public form: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient) { }
  
  ngOnInit() {
    this.form = this.fb.group({
      title :['', Validators.required],
      content :['', Validators.required]
    })
  }
  
  
 public journals = []
 onSubmit(){
  this.journals.push(this.form.value);
  console.log(this.journals)
  
}
getData(){
  this.http.get('http://localhost:3000/chicken').subscribe((result: any) =>{
    console.log(result);
  },
  (err) => {
    console.log(err)
  })
}
}
