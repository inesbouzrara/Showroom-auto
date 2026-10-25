import { Component } from '@angular/core';

@Component({ //decorateur: son role est de renseigné le composant sur tout son environnement
  imports: [],// ou on mets les packages et les composants externes
  selector: 'app-head-bar',//le selecteur represente le nom d'une balise qui sera ensuite utilise pour integre ce composant dans le composant principal  
  styleUrl: './head-bar.css',
  templateUrl: './head-bar.html',
})
export class HeadBar {}
