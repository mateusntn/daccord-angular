import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './dashboard.model';
import { Lesson } from '../lesson/lesson.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', content: 'teste 1', cols: 1, rows: 1 },
          { title: 'Card 2', content: 'teste 2', cols: 1, rows: 1 },
          { title: 'Card 2', content: 'teste 3', cols: 1, rows: 1 },
          { title: 'Card 2', content: 'teste 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', content: 'teste 1', cols: 1, rows: 1 },
        { title: 'Card 2', content: 'teste 2', cols: 1, rows: 1 },
        { title: 'Card 2', content: 'teste 3', cols: 1, rows: 1 },
        { title: 'Card 2', content: 'teste 4', cols: 1, rows: 1 }
      ];
    })
  );

  dashboard: Dashboard = {
    lessonsQuantity: 0,
    violaoQuantity: 0,
    violinoQuantity: 0,
    pianoQuantity: 0,
    saxofoneQuantity: 0,
    cavaquinhoQuantity: 0,
    easyQuantity: 0,
    mediumQuantity: 0,
    hardQuantity: 0,
    lastLessons: []
  }

  breakpoint: number;

  constructor(private breakpointObserver: BreakpointObserver, 
            private service: DashboardService) {}

  ngOnInit(): void {
    this.getData();
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
  }

  getData() {
    this.service.getData().subscribe((response) => {
        this.dashboard = response;
    });    
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }
}
