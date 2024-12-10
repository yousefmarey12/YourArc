import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [style({transform: 'translateX(-100%)', 'opacity': '1'}), animate(500)]),
      transition('* => void', [animate(500, style({transform: 'translateX(100%)', 'opacity': '0'}))]),
    ]),
  ],
})
export class MobileNavComponent {
  
}
