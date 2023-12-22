import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-descrition-intro',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './descrition-intro.component.html',
  styleUrl: './descrition-intro.component.css'
})
export class DescritionIntroComponent {
  @Input() Title: string = ''
  @Input() Descrition: string = ''
  @Input() ButtonContent: string = ''
}
