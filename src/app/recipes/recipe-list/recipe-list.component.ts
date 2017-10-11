import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[] = [
    new Recipe('test recette', 'description recette','https://vignette.wikia.nocookie.net/mkwikia/images/f/f9/DANK_MEMES.jpg/revision/latest?cb=20160618191129')
  ];

  constructor() { }

  ngOnInit() {
  }

}
