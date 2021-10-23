import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  img1:string ="assets/img/cabin.png";
  img2:string ="assets/img/cake.png";
  img3:string ="assets/img/circus.png";
  img4:string ="assets/img/game.png";
  img5:string ="assets/img/safe.png";
  img6:string ="assets/img/submarine.png";
  constructor() { }

  ngOnInit(): void {
  }

}
