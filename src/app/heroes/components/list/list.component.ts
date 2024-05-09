import { Component } from "@angular/core";

@Component({
  selector: 'app-heroes-list',
  templateUrl:'./List.Component.html',
})
export class ListComponent{
  private heroes:string[]=['Hulk','Ironman','Thor','Spiderman','Strange'];
  private lastHeroe?:string;

  get getHeroes():string[]{
    console.log(this.heroes)
    return this.heroes;
  }
  removeHeroe(){
    this.lastHeroe=this.heroes.pop()
  }
  getRemoveHeroe(){
    return this.lastHeroe;
  }

}
