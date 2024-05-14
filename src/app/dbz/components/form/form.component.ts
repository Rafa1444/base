import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: 'form.component.html',
})
export class FormComponent {
  @Output()
  onNewCharacter:EventEmitter<Character> = new EventEmitter();
  public personaje: Character={
    name:'',
    power:0
  }
  emitCharacter():void{
    this.onNewCharacter.emit(this.personaje);

    this.personaje.name='';
    this.personaje.power=0;
  }
 }
