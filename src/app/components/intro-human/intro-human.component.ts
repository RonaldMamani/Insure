import { Component } from '@angular/core';
import { DescritionIntroComponent } from '../descrition-intro/descrition-intro.component';

@Component({
  selector: 'app-intro-human',
  standalone: true,
  imports: [DescritionIntroComponent],
  templateUrl: './intro-human.component.html',
  styleUrl: './intro-human.component.css'
})
export class IntroHumanComponent {

}
