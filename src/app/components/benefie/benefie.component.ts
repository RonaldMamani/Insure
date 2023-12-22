import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefie',
  standalone: true,
  imports: [],
  templateUrl: './benefie.component.html',
  styleUrl: './benefie.component.css'
})
export class BenefieComponent {
  @Input() image: string = ''
  @Input() title: string = ''
  @Input() text: string = ''
}
