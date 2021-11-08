import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {
  img1='/assets/nami.jpg';
  img2='/assets/senna.jpg';
  img3='/assets/zyra.jpg';

  clNami='classeNami';
  clSenna='classeSenna';
  clZyra='classeZyra';

  constructor() { }

  ngOnInit(): void {
  }

}
