import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { DoublePipe } from './common/pipes/double.pipe';
import { Jedis } from './common/interfaces/jedis';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './common/pipes/search.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet, NavComponent, DoublePipe, SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-providers';
  message = 'Hola desde mi pc';
  fecha = new Date();
  numero = 2;
  jedirOrder: Jedis[] = [
    {name: 'Obi-wan Kenobi', rank: 'master'},
    {name: 'Yoda', rank: 'master'},
    {name: 'Anakin Skywalker', rank: 'padawan'},
    {name: 'Mace Windu', rank: 'master'},
    {name: 'Adi Galia', rank: 'master'},
  ];
  searchValue: string = '';
}
