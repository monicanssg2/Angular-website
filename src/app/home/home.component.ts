import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageURL: string = "assets/img/profile.png"
  constructor() { }

  ngOnInit(): void {
  }

}
