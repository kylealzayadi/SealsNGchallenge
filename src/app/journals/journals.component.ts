import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  public user;
  public form: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) { }
  public journals = [];



  ngOnInit() {
    this.getData();
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })

  }

  post() {
    this.http.post('https://seals-server.herokuapp.com/beef', this.form.value).subscribe((result: any) => {
      this.journals = result;
    }),
      (err) => {
        console.log(err)
      };
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

  onSubmit() {
    this.journals.push(this.form.value);
    console.log(this.journals)

  }
  getData() {
    this.http.get('https://seals-server.herokuapp.com/chicken').subscribe((result: any) => {

      this.journals = result;
    }),
      (err) => {
        console.log(err)
      };
  }
  login() {
    const payload = {
      email: 'roberto@urbantxt.com',
      password: 'kyle is cool'
    }
  }
  viewBlog(id) {
    console.log('onNavigate', id);
    this.router.navigate(['/blogs', id])
  }

}

