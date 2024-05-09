import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
    <h3>counter: {{ counter }}</h3>
    <button (click)="increment(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increment(-1)">-1</button>
  `
})
export class counterComponent {
  public title:string = 'Hola mundo';
  public counter:number = 10;

  increment=(value:number):void=>{
    this.counter+=value;
  }
  reset=():void=>{
    this.counter=10;
  }
}
