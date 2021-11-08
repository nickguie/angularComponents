import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  letraMaiscula(str1:string):string{
    return str1.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
