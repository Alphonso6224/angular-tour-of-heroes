import { CommonModule, Location, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    FormsModule,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // Remonte d'une étape dans la pile d'historique du naviagatuer à l'aide
  // du Location service
  goBack(): void {
    this.location.back();
  }
}
