import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  public id;
  public journal;

  constructor(
    public route: ActivatedRoute, public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {


    this.route.params.subscribe((result) => {
      console.log(result);
      this.id = result.id;

      this.getJournal();
    })


  }

  getJournal() {
    this.http.post('https://seals-server.herokuapp.com/getJournal', { id: this.id}).subscribe((res: any) => {
      console.log(res);
      this.journal = res;
    })
  }

}
