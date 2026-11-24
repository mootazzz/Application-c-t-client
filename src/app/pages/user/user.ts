import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserPage {
  user: User;
  afficher: boolean;


  constructor() {
    //Service
  }


  ngOnInit() {
    this.afficher = false;
    this.user = {
      nom: 'Mootaz',
      email: 'mootazzarai@email.com',
      amis: ['Oussema', 'Sarra', 'Amine'],
      nbNotifications: 2,
    };
  }

  toggle() {
    this.afficher = !this.afficher;
  }
}
