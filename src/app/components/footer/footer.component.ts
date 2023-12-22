import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  titleOur = 'OUR COMPANY'
  titleMe = 'HELP ME'
  titleContact = 'CONTACT'
  titleOth = 'OTHER'

  our = [
    {
      id: 1,
      name: 'HOW WE WORK'
    },
    {
      id: 2,
      name: 'WHY INSURE?'
    },
    {
      id: 3,
      name: 'CHECK PRICE'
    },
    {
      id: 4,
      name: 'REVIEWS'
    },
  ]

  help = [
    {
      id: 1,
      name: 'FAQ'
    },
    {
      id: 2,
      name: 'TERMS OF USE'
    },
    {
      id: 3,
      name: 'PRIVACY POLICY'
    },
    {
      id: 4,
      name: 'COOKIES'
    },
  ]

  contact = [
    {
      id: 1,
      name: 'SALES'
    },
    {
      id: 2,
      name: 'SUPPORT'
    },
    {
      id: 3,
      name: 'LIVE CHAT'
    }
  ]

  outhers = [
    {
      id: 1,
      name: 'CAREERS'
    },
    {
      id: 2,
      name: 'PRESS'
    },
    {
      id: 3,
      name: 'LICENSES'
    }
  ]
}