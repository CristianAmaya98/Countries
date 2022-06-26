import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() country !: Country;
  @Input() darkMode: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
