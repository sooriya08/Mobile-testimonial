import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../app/testimonial.service';
import { Testinmony } from '../Models/testimony';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  data: Testinmony[] = [];
  current: Testinmony = null;
  currentIndex: number = 0;

  constructor(private testimonyService: TestimonialService) {
    this.testimonyService.getTestimony().subscribe((data) => {
      this.data = data;
      this.current = this.data[0];
    });
  }
  switch(input: number) {
    if (input === 0 && this.currentIndex > 0) {
      this.current = this.data[this.currentIndex - 1];
      this.currentIndex--;
    }
    if (input === 1 && this.currentIndex < this.data.length - 1) {
      this.current = this.data[this.currentIndex + 1];
      this.currentIndex++;
    }
  }

  ngOnInit() {}
}
