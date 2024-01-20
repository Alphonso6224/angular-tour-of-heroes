import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    RouterLink,
    RouterLinkActive,

    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  // comporte le HEROES Tableau pour les liaisons
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) {}

    ngOnInit(): void {
      this.getHeroes();
    }

  // Methode pour récupérer les heros du service
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
