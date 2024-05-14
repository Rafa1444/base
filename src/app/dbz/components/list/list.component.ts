import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public charactersList: Character[] = [{
    name: 'Trunks',
    power: 11000
  }];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  emitDeleteCharacter(id?: string) {
    if (!id) return;
     this.onDeleteCharacter.emit(id)
  }
}
