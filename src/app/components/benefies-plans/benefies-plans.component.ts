import { Component } from '@angular/core';
import { BenefieComponent } from '../benefie/benefie.component';

@Component({
  selector: 'app-benefies-plans',
  standalone: true,
  imports: [BenefieComponent],
  templateUrl: './benefies-plans.component.html',
  styleUrl: './benefies-plans.component.css'
})
export class BenefiesPlansComponent {

}
