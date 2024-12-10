import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() isNavShown = new EventEmitter<boolean>()
  navState: boolean = false;
  toggleClick() {
    this.navState = !this.navState
    this.isNavShown.next(this.navState)
  }
}
