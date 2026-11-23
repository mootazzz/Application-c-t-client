
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-list-conf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css'
})

export class ListConf {

  // Liste des conférences
  conferences: Conference[] = [
    {
      title: 'Angular & Modern Web Summit 2026',
      description: 'Découvrez les dernières innovations Angular 21, SSR, architectures modulaires et performances front-end.',
      date: '2026-03-25',
      nbrMax: 100,
      nbrReservation: 65,
      Picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI & Generative Models World Expo',
      description: 'Plongez dans les LLMs de nouvelle génération, l’IA multimodale et les cas d’usage en entreprise.',
      date: '2026-04-12',
      nbrMax: 100,
      nbrReservation: 92,
      Picture: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cloud Native & DevOps Days',
      description: 'Kubernetes, microservices, observabilité et automatisation CI/CD à grande échelle.',
      date: '2026-05-18',
      nbrMax: 150,
      nbrReservation: 100,
      Picture: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'International Cybersecurity & Ethical Hacking',
      description: 'Ateliers pratiques, simulations d’attaques en temps réel et meilleures pratiques Zero Trust.',
      date: '2026-06-22',
      nbrMax: 80,
      nbrReservation: 68,
      Picture: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mobile App Summit (Flutter & React Native)',
      description: 'Tendances du développement mobile multiplateforme, design UI/UX fluide et intégration d’APIs.',
      date: '2026-07-08',
      nbrMax: 100,
      nbrReservation: 100,
      Picture: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Data Science & Big Data Summit',
      description: 'Extraction de valeur des données massives, pipelines temps réel et visualisation avancée.',
      date: '2026-08-14',
      nbrMax: 120,
      nbrReservation: 98,
      Picture: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Recherche et tri
  searchTerm: string = '';
  sortBy: string = 'date';

  // Message de réservation
  reservationMessage: string | null = null;
  reservedConferenceTitle: string | null = null;

  // Nombre total de places disponibles
  get totalAvailablePlaces(): number {
    return this.conferences.reduce(
      (total, conf) => total + (conf.nbrMax - conf.nbrReservation),
      0
    );
  }

  // Filtrage et tri des conférences
  get filteredConferences(): Conference[] {

    let result = this.conferences.filter(conf => {

      const search = this.searchTerm.toLowerCase();

      return (
        conf.title.toLowerCase().includes(search) ||
        conf.description.toLowerCase().includes(search)
      );
    });

    // Tri par date
    if (this.sortBy === 'date') {
      result = [...result].sort(
        (a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    // Tri par places disponibles croissantes
    else if (this.sortBy === 'places-asc') {
      result = [...result].sort(
        (a, b) =>
          (a.nbrMax - a.nbrReservation) -
          (b.nbrMax - b.nbrReservation)
      );
    }

    // Tri par places disponibles décroissantes
    else if (this.sortBy === 'places-desc') {
      result = [...result].sort(
        (a, b) =>
          (b.nbrMax - b.nbrReservation) -
          (a.nbrMax - a.nbrReservation)
      );
    }

    // Tri par titre alphabétique
    else if (this.sortBy === 'title') {
      result = [...result].sort(
        (a, b) => a.title.localeCompare(b.title)
      );
    }

    return result;
  }

  // Réserver une place
  reservePlace(conf: Conference): void {

    if (conf.nbrReservation < conf.nbrMax) {

      // Incrémenter le nombre de réservations
      conf.nbrReservation++;

      this.reservedConferenceTitle = conf.title;

      this.reservationMessage =
        `Félicitations ! Votre place pour "${conf.title}" a été réservée avec succès.`;

      // Masquer le message après 4 secondes
      setTimeout(() => {
        this.reservationMessage = null;
        this.reservedConferenceTitle = null;
      }, 4000);

    } else {
      this.reservationMessage = 'Désolé, cette conférence est complète.';
    }
  }

}
