import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1, name:'Derrick', quote:'Many of life’s failures are people who did not realize how close they were to success when they gave up.', author:'Thomas A. Edison'},
    {id:2, name:'Daniel', quote:'Life is what happens when you’re busy making other plans.', author:'John Lennon'},
    {id:3, name:'Maria', quote:'The purpose of our lives is to be happy.', author:'Dalai Lama'},
    {id:4, name:'Nico', quote:'Get busy living or get busy dying.', author:'Stephen King'},
    {id:5, name:'Vanessa', quote:'Many of life’s failures are people who did not realize how close they were to success when they gave up.', author:'Thomas A. Edison'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
