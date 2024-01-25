import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] =
    ['Spiderman',
      'Ironam',
      'Hulk',
      'Capitan America',
      'Thor'
    ];

  public deleteHero?: string;

  removeLasHero(): void {
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);

  }

}
