import { Component, EventEmitter, Input, Output } from '@angular/core';
// Import de l’interface Auto .Elle sert à typer la voiture
import { Auto } from '../../interfaces/auto';
@Component({
  imports: [],
  selector: 'app-car-details',
  styleUrl: './car-details.css',
  templateUrl: './car-details.html',
})
export class CarDetails {

  // le parent enverra une seule voiture, celle sur laquelle on a cliqué (selectedCar), donc l’@Input est de type Auto, sans crochets.
  @Input () auto! : Auto
  // Le type est void parce qu’on n’envoie aucune donnée, juste un signal « on veut revenir ».
  @Output() onBack= new EventEmitter<void>()
  // methode back
  back(){
    // C’est emit() qui déclenche l’événement chez le parent.
    this.onBack.emit()
  }
}
