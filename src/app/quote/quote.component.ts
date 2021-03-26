import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Derrick', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison', new Date(2021,2,25)),
    new Quote(2, 'Daniel', 'Life is what happens when you’re busy making other plans.', 'John Lennon', new Date(2021,2,27)),
    new Quote(3, 'Maria', 'The purpose of our lives is to be happy.', 'Dalai Lama', new Date(2021,2,22)),
    new Quote(4, 'Nico', 'Get busy living or get busy dying.', 'Stephen King', new Date(2021,1,18)),
    new Quote(5, 'Vanessa', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison', new Date(2021,0,7)),
  ];

  toggleQuote(index){
    this.quotes[index].showQuote =! this.quotes[index].showQuote;
  }

  deleteThis(toDelete, index){
    if(toDelete){
      let destroy= confirm(`Are you sure you want to delete this Goal?`)

      if (destroy){
      this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
