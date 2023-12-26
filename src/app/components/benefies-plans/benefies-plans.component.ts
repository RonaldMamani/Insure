import { Component } from '@angular/core';
import { BenefieComponent } from '../benefie/benefie.component';
import { FindAboutMoreComponent } from '../find-about-more/find-about-more.component';

@Component({
  selector: 'app-benefies-plans',
  standalone: true,
  imports: [BenefieComponent, FindAboutMoreComponent],
  templateUrl: './benefies-plans.component.html',
  styleUrl: './benefies-plans.component.css'
})
export class BenefiesPlansComponent {

}
