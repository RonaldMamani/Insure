import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-find-about-more',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './find-about-more.component.html',
  styleUrl: './find-about-more.component.css'
})
export class FindAboutMoreComponent {
  @Input() Title: string = ''
  @Input() ButtonContent: string = ''
}
