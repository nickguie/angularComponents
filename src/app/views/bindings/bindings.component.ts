import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  nome = 'Nickolas';
  cor = 'purple';
  url = '/assets/yuumi.jpg';
  cssClass = 'outraClasse';
  inputStyle = 'background-color: red';


  constructor() { }

  ngOnInit(): void {
  }

  somar(val1:number, val2:number):number {
    return val1+val2;
  }

  mostrarMsg():string{
    return 'É NOIS QUE VOA BRUXAÇO';
  }

  trolar():void{
    if(this.inputStyle==='background-color: red'){
      this.inputStyle='background-color: blue'

    }else if(this.inputStyle==='background-color: blue'){
      this.inputStyle='background-color: red'
    }
  }

}
