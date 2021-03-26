import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Derrick', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison'),
    new Quote(2, 'Daniel', 'Life is what happens when you’re busy making other plans.', 'John Lennon'),
    new Quote(3, 'Maria', 'The purpose of our lives is to be happy.', 'Dalai Lama'),
    new Quote(4, 'Nico', 'Get busy living or get busy dying.', 'Stephen King'),
    new Quote(5, 'Vanessa', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
