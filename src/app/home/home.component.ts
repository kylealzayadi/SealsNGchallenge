import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public classroom = [
    {
      name: 'Abdiel',
      status: true
    },
    {
      name: 'got',
      status: true
    },
    {
      name: 'Gains',
      status: true
    }
  ];
  jumanji() {
    for(let david of this.classroom){
      if(david.status === true){
        david.status = false;
      }else{
        david.status = true;
      }
    }

    console.log(this.classroom);
  }

  constructor() { }

  ngOnInit() {
  }

}

  



  

